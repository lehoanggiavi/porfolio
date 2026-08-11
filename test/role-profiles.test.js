const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const roleProfiles = require("../role-profiles.js");

const expectedRoles = ["ai", "ds", "da"];
const expectedProjects = [
  "xom-bank",
  "smart-class",
  "clen",
  "dagpt",
  "cacao-shield",
  "fraud-detection",
  "parking-slot",
  "heart-disease",
  "vnstock-ai",
];

test("defines exactly the three supported application roles", () => {
  assert.deepEqual(Object.keys(roleProfiles).sort(), expectedRoles.sort());
});

test("every role has complete bilingual content and a distinct CV asset", () => {
  const cvLinks = new Set();

  Object.values(roleProfiles).forEach((profile) => {
    assert.match(profile.cvHref, /^assets\/Le_Hoang_Gia_Vi_CV_[A-Za-z_]+\.pdf$/);
    cvLinks.add(profile.cvHref);

    ["en", "vi"].forEach((language) => {
      const copy = profile.copy[language];
      assert.ok(copy.hero.titlePrimary.length > 10);
      assert.ok(copy.about.points.every((point) => Array.isArray(point) && point[0] && point[1]));
      assert.equal(copy.expertise.cards.length, 3);
      assert.ok(copy.projects.title.length > 10);
    });
  });

  assert.equal(cvLinks.size, expectedRoles.length);
});

test("each role ranks every repository exactly once", () => {
  Object.values(roleProfiles).forEach((profile) => {
    assert.deepEqual(Object.keys(profile.projectPriorities).sort(), expectedProjects.sort());
    assert.deepEqual(
      Object.values(profile.projectPriorities).sort((a, b) => a - b),
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
    );
  });
});

test("project priorities reflect each role's strongest evidence", () => {
  assert.equal(roleProfiles.ai.projectPriorities["smart-class"], 1);
  assert.equal(roleProfiles.ds.projectPriorities["fraud-detection"], 1);
  assert.equal(roleProfiles.da.projectPriorities["xom-bank"], 1);
});

test("the published page loads role data before its behavior and exposes all role controls", () => {
  const html = fs.readFileSync(path.join(__dirname, "..", "index.html"), "utf8");
  const script = fs.readFileSync(path.join(__dirname, "..", "script.js"), "utf8");
  const profilesScript = html.indexOf('<script src="role-profiles.js"></script>');
  const behaviorScript = html.indexOf('<script src="script.js"></script>');

  assert.ok(profilesScript >= 0 && profilesScript < behaviorScript);
  expectedRoles.forEach((role) => {
    assert.match(html, new RegExp(`data-role="${role}"`));
  });
  expectedProjects.forEach((project) => {
    assert.match(html, new RegExp(`data-project-id="${project}"`));
  });
  assert.match(script, /\.role-switcher-options \[data-role\]/);
  assert.doesNotMatch(script, /\$\$\('\[data-role\]'\)/);
});

test("every role points to a published CV PDF", () => {
  Object.values(roleProfiles).forEach((profile) => {
    const assetPath = path.join(__dirname, "..", profile.cvHref);
    assert.ok(fs.existsSync(assetPath), `Missing CV asset: ${profile.cvHref}`);
    assert.ok(fs.statSync(assetPath).size > 10_000, `CV asset is unexpectedly small: ${profile.cvHref}`);
  });
});

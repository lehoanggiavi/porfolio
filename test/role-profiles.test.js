const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const roleProfiles = require("../role-profiles.js");

const expectedRoles = ["ai", "ds", "da"];
const expectedProjects = [
  "fmcg-multi-country-sales",
  "fnb-supply-chain",
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
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    );
  });
});

test("project priorities reflect each role's strongest evidence", () => {
  assert.equal(roleProfiles.ai.projectPriorities["vnstock-ai"], 1);
  assert.equal(roleProfiles.ai.projectPriorities.dagpt, 2);
  assert.equal(roleProfiles.ds.projectPriorities["fraud-detection"], 1);
  assert.equal(roleProfiles.da.projectPriorities["fmcg-multi-country-sales"], 1);
  assert.equal(roleProfiles.da.projectPriorities["fnb-supply-chain"], 2);
  assert.equal(roleProfiles.da.projectPriorities["xom-bank"], 3);
});

test("the AI CV features VNStock first and excludes Xóm Bank", () => {
  const tex = fs.readFileSync(
    path.join(__dirname, "..", "templates", "cv_follow_jd", "LeHoangGiaVi_CV_AI_Engineer.tex"),
    "utf8",
  );
  const vnstock = tex.indexOf("\\projectentry{VNSTOCK AI ANALYST}");
  const dagpt = tex.indexOf("\\projectentry{DAGPT}");
  const smartClass = tex.indexOf("\\projectentry{SMART CLASS");
  const fraud = tex.indexOf("\\projectentry{CREDIT CARD FRAUD DETECTION}");
  assert.ok(vnstock >= 0, "Missing VNStock project");
  assert.ok(vnstock < dagpt && dagpt < smartClass && smartClass < fraud);
  assert.doesNotMatch(tex, /X[ÓÃ]M BANK/);
});

test("the DA CV leads with FMCG business insight and excludes fraud detection", () => {
  const tex = fs.readFileSync(
    path.join(__dirname, "..", "templates", "cv_follow_jd", "LeHoangGiaVi_CV_Data_Analyst.tex"),
    "utf8",
  );
  const fmcg = tex.indexOf("\\projectentry{FMCG MULTI-COUNTRY SALES ANALYTICS}");
  const fnb = tex.indexOf("\\projectentry{F\\&B SUPPLY CHAIN PERFORMANCE DASHBOARD}");

  assert.ok(fmcg >= 0 && fmcg < fnb, "FMCG must be the first DA project");
  assert.match(tex, /top 20\\% of SKUs generated 50\.04\\% of net sales/);
  assert.match(tex, /planning guardrail/);
  assert.doesNotMatch(tex, /CREDIT CARD FRAUD DETECTION/);
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
  assert.match(
    html,
    /<article aria-label="F&amp;B Supply Chain"[\s\S]*?src="images\/projects\/fnb-supply-chain-cover\.png"/,
  );
  const fnbCover = path.join(__dirname, "..", "images", "projects", "fnb-supply-chain-cover.png");
  assert.ok(fs.existsSync(fnbCover), "Missing F&B Supply Chain project cover");
  assert.ok(fs.statSync(fnbCover).size > 100_000, "F&B Supply Chain project cover is unexpectedly small");
  assert.match(
    html,
    /<article aria-label="FMCG Multi-Country Sales"[\s\S]*?src="images\/projects\/fmcg-multi-country-sales-cover\.png"/,
  );
  const fmcgCover = path.join(__dirname, "..", "images", "projects", "fmcg-multi-country-sales-cover.png");
  assert.ok(fs.existsSync(fmcgCover), "Missing FMCG Multi-Country Sales project cover");
  assert.ok(fs.statSync(fmcgCover).size > 100_000, "FMCG Multi-Country Sales project cover is unexpectedly small");
  assert.match(script, /\.role-switcher-options \[data-role\]/);
  assert.doesNotMatch(script, /\$\$\('\[data-role\]'\)/);
});

test("each CV deep-links its Portfolio hyperlink to the matching role", () => {
  const templates = {
    ai: "LeHoangGiaVi_CV_AI_Engineer.tex",
    ds: "LeHoangGiaVi_CV_Data_Scientist.tex",
    da: "LeHoangGiaVi_CV_Data_Analyst.tex",
  };

  Object.entries(templates).forEach(([role, file]) => {
    const template = fs.readFileSync(
      path.join(__dirname, "..", "templates", "cv_follow_jd", file),
      "utf8",
    );
    assert.match(
      template,
      new RegExp(`https://lehoanggiavi\\.github\\.io/portfolio/\\?role=${role}`),
    );
  });
});

test("every role points to a published CV PDF", () => {
  Object.values(roleProfiles).forEach((profile) => {
    const assetPath = path.join(__dirname, "..", profile.cvHref);
    assert.ok(fs.existsSync(assetPath), `Missing CV asset: ${profile.cvHref}`);
    assert.ok(fs.statSync(assetPath).size > 10_000, `CV asset is unexpectedly small: ${profile.cvHref}`);
  });
});

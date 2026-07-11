const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Page ready */
window.addEventListener("DOMContentLoaded", () => {
  requestAnimationFrame(() => document.body.classList.add("page-ready"));
});

/* Full-page background video */
const siteVideo = $("#site-video");
const videoToggle = $("#video-toggle");

if (siteVideo) {
  const markVideoReady = () => {
    siteVideo.classList.add("loaded");
    document.body.classList.add("video-ready");
  };

  const updateVideoButton = () => {
    if (!videoToggle) return;

    const paused = siteVideo.paused;
    const icon = videoToggle.querySelector("iconify-icon");

    icon?.setAttribute("icon", paused ? "lucide:play" : "lucide:pause");
    videoToggle.setAttribute(
      "aria-label",
      paused ? "Play background video" : "Pause background video"
    );
    videoToggle.setAttribute(
      "title",
      paused ? "Play background video" : "Pause background video"
    );
    videoToggle.classList.toggle("is-paused", paused);
  };

  const tryPlayVideo = async () => {
    try {
      siteVideo.muted = true;
      await siteVideo.play();
      markVideoReady();
      updateVideoButton();
    } catch (error) {
      console.warn("Background video autoplay was blocked:", error);
      updateVideoButton();
    }
  };

  if (siteVideo.readyState >= 2) {
    markVideoReady();
    tryPlayVideo();
  } else {
    siteVideo.addEventListener("loadeddata", markVideoReady, { once: true });
    siteVideo.addEventListener("canplay", tryPlayVideo, { once: true });
  }

  siteVideo.addEventListener("play", updateVideoButton);
  siteVideo.addEventListener("pause", updateVideoButton);

  siteVideo.addEventListener("error", () => {
    document.body.classList.add("video-fallback");
    videoToggle?.setAttribute("hidden", "");
    console.warn("Missing background video: videos/hero-video.mp4");
  });

  videoToggle?.addEventListener("click", async () => {
    if (siteVideo.paused) {
      document.body.classList.remove("video-user-paused");
      await tryPlayVideo();
    } else {
      document.body.classList.add("video-user-paused");
      siteVideo.pause();
    }
  });

  window.addEventListener("load", tryPlayVideo, { once: true });

  document.addEventListener("visibilitychange", () => {
    if (!document.hidden && !document.body.classList.contains("video-user-paused")) {
      tryPlayVideo();
    }
  });
}

/* Navigation */
const navbar = $("#navbar");
const menuButton = $("#menu-toggle");
const mobileNav = $("#mobile-nav");
const progressBar = $(".scroll-progress span");
const navLinks = $$(".desktop-nav a, .mobile-nav a");
const pageSections = $$("header[id], main section[id]");

function closeMenu() {
  mobileNav?.classList.remove("open");
  document.body.classList.remove("menu-open");
  menuButton?.setAttribute("aria-expanded", "false");

  const icon = menuButton?.querySelector("iconify-icon");
  icon?.setAttribute("icon", "lucide:menu");
}

menuButton?.addEventListener("click", () => {
  const open = mobileNav.classList.toggle("open");
  document.body.classList.toggle("menu-open", open);
  menuButton.setAttribute("aria-expanded", String(open));

  const icon = menuButton.querySelector("iconify-icon");
  icon.setAttribute("icon", open ? "lucide:x" : "lucide:menu");
});

navLinks.forEach((link) => link.addEventListener("click", closeMenu));

document.addEventListener("click", (event) => {
  if (!navbar?.contains(event.target)) closeMenu();
});

function updateScrollUI() {
  const y = window.scrollY;
  navbar?.classList.toggle("scrolled", y > 45);

  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

  const videoShift = Math.min(28, y * 0.012);
  document.documentElement.style.setProperty(
    "--site-video-shift",
    `${videoShift}px`
  );

  if (progressBar) {
    progressBar.style.width = `${maxScroll > 0 ? (y / maxScroll) * 100 : 0}%`;
  }

  let current = "home";

  pageSections.forEach((section) => {
    if (y >= section.offsetTop - 190) current = section.id;
  });

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
}

window.addEventListener("scroll", updateScrollUI, { passive: true });
updateScrollUI();

/* Reveal on scroll */
const revealElements = $$(".reveal");

if (reduceMotion) {
  revealElements.forEach((element) => element.classList.add("show"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("show");
        revealObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -55px 0px",
    }
  );

  revealElements.forEach((element, index) => {
    if (!element.classList.contains("delay-1") &&
        !element.classList.contains("delay-2") &&
        !element.classList.contains("delay-3") &&
        !element.classList.contains("delay-4")) {
      element.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
    }

    revealObserver.observe(element);
  });
}

/* Count-up stats */
const counters = $$("[data-count]");

function animateCounter(element) {
  const target = Number(element.dataset.count);
  const decimals = Number(element.dataset.decimals || 0);
  const duration = 1200;
  const start = performance.now();

  function frame(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = target * eased;

    element.textContent = decimals > 0
      ? value.toFixed(decimals)
      : Math.round(value).toString();

    if (progress < 1) requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
}

if (reduceMotion) {
  counters.forEach((counter) => {
    const decimals = Number(counter.dataset.decimals || 0);
    counter.textContent = Number(counter.dataset.count).toFixed(decimals);
  });
} else {
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.6 }
  );

  counters.forEach((counter) => counterObserver.observe(counter));
}

/* Cursor glow */
const cursorGlow = $(".cursor-glow");

if (!reduceMotion && cursorGlow) {
  window.addEventListener(
    "pointermove",
    (event) => {
      cursorGlow.style.left = `${event.clientX}px`;
      cursorGlow.style.top = `${event.clientY}px`;
    },
    { passive: true }
  );
}

/* 3D tilt */
if (!reduceMotion) {
  $$("[data-tilt]").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;

      const rotateY = (x - 0.5) * 9;
      const rotateX = (0.5 - y) * 9;

      card.style.transform =
        `perspective(1300px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`;
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform =
        "perspective(1300px) rotateX(0deg) rotateY(0deg) translateY(0)";
    });
  });
}

/* Parallax */
const parallaxItems = $$("[data-parallax]");

if (!reduceMotion && parallaxItems.length) {
  function updateParallax() {
    const viewportCenter = window.innerHeight / 2;

    parallaxItems.forEach((item) => {
      const rect = item.getBoundingClientRect();
      const itemCenter = rect.top + rect.height / 2;
      const distance = itemCenter - viewportCenter;
      const speed = Number(item.dataset.parallax || 0.02);
      const offset = Math.max(-28, Math.min(28, -distance * speed));

      item.style.setProperty("--parallax-y", `${offset}px`);
    });
  }

  window.addEventListener("scroll", updateParallax, { passive: true });
  updateParallax();
}

/* Magnetic buttons */
if (!reduceMotion) {
  $$(".magnetic").forEach((button) => {
    button.addEventListener("pointermove", (event) => {
      const rect = button.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;

      button.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
    });

    button.addEventListener("pointerleave", () => {
      button.style.transform = "";
    });
  });
}

/* Spotlight cards */
$$(".spotlight-card").forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
    card.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
  });
});

/* Journey timeline drawing */
const timeline = $("#journey-timeline");
const timelineProgress = $(".timeline-progress", timeline || document);
const timelineItems = $$(".timeline-item", timeline || document);

function updateTimeline() {
  if (!timeline || !timelineProgress) return;

  const rect = timeline.getBoundingClientRect();
  const viewportPoint = window.innerHeight * 0.72;
  const progress = Math.max(0, Math.min(1, (viewportPoint - rect.top) / rect.height));

  timelineProgress.style.height = `${progress * 100}%`;

  timelineItems.forEach((item) => {
    const itemRect = item.getBoundingClientRect();
    item.classList.toggle("active", itemRect.top < viewportPoint);
  });
}

window.addEventListener("scroll", updateTimeline, { passive: true });
updateTimeline();

/* Repository carousel: filtering + 3 cards per view */
const repoCards = $$(".repo-card");
const repoFilterButtons = $$(".project-filters button");
const repoCount = $("#repoCount");
const repoRange = $("#repoRange");
const repoTrack = $("#repoTrack");
const repoViewport = $("#repoViewport");
const repoPrev = $("#repoPrev");
const repoNext = $("#repoNext");

let repoCurrentIndex = 0;
let repoActiveFilter = "all";

function getRepoCardsPerView() {
  if (window.innerWidth <= 720) return 1;
  if (window.innerWidth <= 1024) return 2;
  return 3;
}

function getVisibleRepoCards() {
  return repoCards.filter((card) => !card.hidden);
}

function updateRepoCarousel({ animate = true } = {}) {
  if (!repoTrack || !repoViewport) return;

  const visibleCards = getVisibleRepoCards();
  const cardsPerView = getRepoCardsPerView();
  const maxIndex = Math.max(0, visibleCards.length - cardsPerView);
  repoCurrentIndex = Math.min(Math.max(repoCurrentIndex, 0), maxIndex);

  const targetCard = visibleCards[repoCurrentIndex];
  const offset = targetCard ? targetCard.offsetLeft : 0;

  repoTrack.style.transitionDuration = animate && !reduceMotion ? ".58s" : "0s";
  repoTrack.style.transform = `translate3d(${-offset}px, 0, 0)`;

  if (repoPrev) repoPrev.disabled = repoCurrentIndex <= 0;
  if (repoNext) repoNext.disabled = repoCurrentIndex >= maxIndex;

  if (repoCount) repoCount.textContent = String(visibleCards.length);

  if (repoRange) {
    if (!visibleCards.length) {
      repoRange.textContent = "0";
    } else {
      const start = repoCurrentIndex + 1;
      const end = Math.min(repoCurrentIndex + cardsPerView, visibleCards.length);
      repoRange.textContent = start === end ? String(start) : `${start}–${end}`;
    }
  }
}

function moveRepoCarousel(direction) {
  const visibleCards = getVisibleRepoCards();
  const cardsPerView = getRepoCardsPerView();
  const maxIndex = Math.max(0, visibleCards.length - cardsPerView);
  const nextIndex = repoCurrentIndex + direction * cardsPerView;

  repoCurrentIndex = Math.min(Math.max(nextIndex, 0), maxIndex);
  updateRepoCarousel();
}

function applyRepoFilter(filter) {
  repoActiveFilter = filter;
  repoCurrentIndex = 0;

  repoCards.forEach((card) => {
    const visible = filter === "all" || card.dataset.category === filter;
    card.hidden = !visible;
    card.classList.remove("is-active");
  });

  requestAnimationFrame(() => updateRepoCarousel({ animate: false }));
}

repoPrev?.addEventListener("click", () => moveRepoCarousel(-1));
repoNext?.addEventListener("click", () => moveRepoCarousel(1));

repoFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    repoFilterButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });

    applyRepoFilter(button.dataset.filter || "all");
  });
});

repoCards.forEach((card) => {
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      card.classList.toggle("is-active");
    }
  });

  card.addEventListener("click", (event) => {
    if (!window.matchMedia("(hover: none)").matches) return;
    if (event.target.closest(".repo-link")) return;

    if (!card.classList.contains("is-active")) {
      event.preventDefault();
      repoCards.forEach((item) => item.classList.remove("is-active"));
      card.classList.add("is-active");
    }
  });
});

repoViewport?.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") moveRepoCarousel(-1);
  if (event.key === "ArrowRight") moveRepoCarousel(1);
});

let repoResizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(repoResizeTimer);
  repoResizeTimer = setTimeout(() => updateRepoCarousel({ animate: false }), 100);
});

window.addEventListener("load", () => updateRepoCarousel({ animate: false }), { once: true });
applyRepoFilter(repoActiveFilter);

/* Neural network canvas */
const canvas = $("#network-canvas");
const context = canvas?.getContext("2d");

let width = 0;
let height = 0;
let ratio = 1;
let nodes = [];
let pointer = { x: -9999, y: -9999 };

function createNode() {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.22,
    vy: (Math.random() - 0.5) * 0.22,
    radius: 1 + Math.random() * 1.4,
  };
}

function resizeCanvas() {
  if (!canvas || !context) return;

  ratio = Math.min(window.devicePixelRatio || 1, 2);
  width = window.innerWidth;
  height = window.innerHeight;

  canvas.width = Math.floor(width * ratio);
  canvas.height = Math.floor(height * ratio);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

  context.setTransform(ratio, 0, 0, ratio, 0, 0);

  const nodeCount = Math.max(24, Math.min(70, Math.floor(width / 24)));
  nodes = Array.from({ length: nodeCount }, createNode);
}

function drawNetwork() {
  if (!context || reduceMotion) return;

  context.clearRect(0, 0, width, height);

  nodes.forEach((node) => {
    node.x += node.vx;
    node.y += node.vy;

    if (node.x < -20) node.x = width + 20;
    if (node.x > width + 20) node.x = -20;
    if (node.y < -20) node.y = height + 20;
    if (node.y > height + 20) node.y = -20;

    const dx = node.x - pointer.x;
    const dy = node.y - pointer.y;
    const pointerDistance = Math.hypot(dx, dy);

    if (pointerDistance < 130 && pointerDistance > 0) {
      node.x += (dx / pointerDistance) * 0.18;
      node.y += (dy / pointerDistance) * 0.18;
    }
  });

  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const a = nodes[i];
      const b = nodes[j];
      const distance = Math.hypot(a.x - b.x, a.y - b.y);

      if (distance < 125) {
        const alpha = (1 - distance / 125) * 0.13;

        context.beginPath();
        context.moveTo(a.x, a.y);
        context.lineTo(b.x, b.y);
        context.strokeStyle = `rgba(197, 225, 151, ${alpha})`;
        context.lineWidth = 0.6;
        context.stroke();
      }
    }
  }

  nodes.forEach((node) => {
    context.beginPath();
    context.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
    context.fillStyle = "rgba(197, 225, 151, .25)";
    context.fill();
  });

  requestAnimationFrame(drawNetwork);
}

if (canvas && context && !reduceMotion) {
  resizeCanvas();

  window.addEventListener("resize", resizeCanvas, { passive: true });

  window.addEventListener(
    "pointermove",
    (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    },
    { passive: true }
  );

  window.addEventListener("pointerleave", () => {
    pointer.x = -9999;
    pointer.y = -9999;
  });

  drawNetwork();
}

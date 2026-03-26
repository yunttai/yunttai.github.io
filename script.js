const body = document.body;
const topbar = document.querySelector(".topbar");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = [...document.querySelectorAll(".nav-links a")];
const sections = [...document.querySelectorAll("section[id]")];
const revealTargets = [...document.querySelectorAll("[data-reveal]")];
const toTop = document.querySelector(".to-top");

const closeMenu = () => {
  body.classList.remove("nav-open");
  menuToggle?.setAttribute("aria-expanded", "false");
};

const openMenu = () => {
  body.classList.add("nav-open");
  menuToggle?.setAttribute("aria-expanded", "true");
};

const setActiveLink = (id) => {
  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${id}`;
    link.classList.toggle("active", isActive);
  });
};

menuToggle?.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  if (expanded) {
    closeMenu();
  } else {
    openMenu();
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const href = link.getAttribute("href");
    const target = href ? document.querySelector(href) : null;
    closeMenu();

    if (!target) {
      return;
    }

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

document.addEventListener("click", (event) => {
  if (!body.classList.contains("nav-open")) {
    return;
  }

  if (topbar?.contains(event.target)) {
    return;
  }

  closeMenu();
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) {
    closeMenu();
  }
});

const sectionObserver = new IntersectionObserver(
  (entries) => {
    const visibleEntries = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

    if (!visibleEntries.length) {
      return;
    }

    const currentId = visibleEntries[0].target.getAttribute("id");
    if (currentId) {
      setActiveLink(currentId);
    }
  },
  {
    rootMargin: "-28% 0px -45% 0px",
    threshold: [0.2, 0.35, 0.55, 0.75],
  },
);

sections.forEach((section) => sectionObserver.observe(section));

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  {
    rootMargin: "0px 0px -10% 0px",
    threshold: 0.12,
  },
);

revealTargets.forEach((target, index) => {
  target.style.transitionDelay = `${Math.min(index * 40, 180)}ms`;
  revealObserver.observe(target);
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 420) {
    toTop?.classList.add("visible");
  } else {
    toTop?.classList.remove("visible");
  }
});

toTop?.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

if (sections[0]) {
  setActiveLink(sections[0].id);
}

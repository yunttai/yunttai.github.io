const navLinks = document.querySelectorAll('.nav-links a');
const sections = [...document.querySelectorAll('section[id]')];
const toTop = document.querySelector('.to-top');

// Smoothly highlight nav items as the user scrolls.
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute('id');
      const link = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (!link) return;
      if (entry.isIntersecting) {
        navLinks.forEach((l) => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  },
  { threshold: 0.32 }
);

sections.forEach((section) => observer.observe(section));

// Enable smooth scrolling for anchor links.
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target?.scrollIntoView({ behavior: 'smooth' });
  });
});

// Back-to-top button visibility and action.
window.addEventListener('scroll', () => {
  if (window.scrollY > 320) {
    toTop?.classList.add('visible');
  } else {
    toTop?.classList.remove('visible');
  }
});

toTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ---------------------------------------------------------------------------
// SCROLL REVEAL — anima elementos com a classe "reveal" conforme entram na tela
// ---------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window) || targets.length === 0) {
    targets.forEach((el) => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  targets.forEach((el) => observer.observe(el));
});

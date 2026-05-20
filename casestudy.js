// Scroll reveal animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll(
    '.cs-tldr-card, .cs-numbered-block, .cs-quote-card, .cs-icon-item, ' +
    '.cs-key-insight, .cs-opportunity, .cs-persona-card, .cs-feature, ' +
    '.cs-finding-card, .cs-solution-card, .cs-final-callout, .cs-next-steps, ' +
    '.cs-stat, .cs-screen, .cs-insight-pills, .cs-vision-block, .cs-img-block'
  );
  targets.forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${(i % 6) * 0.06}s`;
    observer.observe(el);
  });
});

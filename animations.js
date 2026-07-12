/* Premium micro-animations — stagger on each SPA paint */
(function () {
  const SELECTORS = [
    '.card', '.module-card', '.dashboard-card',
    '.stats-card', '.widget', '.quick-action-card',
    '.stat-widget', '.insight-card', '.timeline-exam',
    '.exam-item', '.goal-card', '.achievement',
    '.note-card', '.resource-card', '.recommendation-card',
    '.planner-item', '.continue-card', '.sidebar-card',
  ].join(',');

  function staggerAnimate(root) {
    const cards = root.querySelectorAll(SELECTORS);
    cards.forEach((card, index) => {
      card.animate(
        [
          { opacity: 0, transform: 'translateY(18px)' },
          { opacity: 1, transform: 'translateY(0)'   },
        ],
        {
          duration: 450,
          delay:    index * 45,
          fill:     'both',
          easing:   'cubic-bezier(.22,1,.36,1)',
        }
      );
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    const app = document.getElementById('app');
    if (!app) return;

    new MutationObserver(() => {
      setTimeout(() => staggerAnimate(app), 60);
    }).observe(app, { childList: true });
  });
})();

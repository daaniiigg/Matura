/* Inicializa Lucide Icons y micro-animaciones en cada repintado del SPA */
(function () {
  const CARD_SELECTORS = [
    '.card', '.module-card', '.dashboard-card',
    '.stats-card', '.widget', '.quick-action-card',
    '.stat-widget', '.insight-card', '.timeline-exam',
    '.exam-item', '.goal-card', '.achievement',
    '.note-card', '.resource-card', '.recommendation-card',
    '.planner-item', '.continue-card', '.sidebar-card',
  ].join(',');

  function renderIcons() {
    if (window.lucide) lucide.createIcons();
  }

  function staggerAnimate(root) {
    root.querySelectorAll(CARD_SELECTORS).forEach((el, i) => {
      el.animate(
        [{ opacity: 0, transform: 'translateY(18px)' }, { opacity: 1, transform: 'translateY(0)' }],
        { duration: 450, delay: i * 45, fill: 'both', easing: 'cubic-bezier(.22,1,.36,1)' }
      );
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    renderIcons();

    const app = document.getElementById('app');
    if (!app) return;

    new MutationObserver(function () {
      renderIcons();
      setTimeout(() => staggerAnimate(app), 60);
    }).observe(app, { childList: true });
  });
})();

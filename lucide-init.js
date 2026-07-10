/* Inicializa Lucide Icons automáticamente cada vez que app.js
   reemplaza el contenido de #app via innerHTML. */
(function () {
  function renderIcons() {
    if (window.lucide) {
      lucide.createIcons();
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    renderIcons();

    const app = document.getElementById('app');
    if (!app) return;

    new MutationObserver(renderIcons).observe(app, { childList: true });
  });
})();

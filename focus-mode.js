/* ==========================================================
   FOCUS MODE — API global reutilizable
   Uso: window.Matura.focusMode.open({ title, content })
        window.Matura.focusMode.close()
========================================================== */
(function () {
  const overlay   = document.getElementById('focusOverlay');
  const modal     = document.getElementById('focusMode');
  const closeBtn  = document.getElementById('focusModeClose');
  const titleEl   = document.getElementById('focusModeTitle');
  const contentEl = document.getElementById('focusModeContent');

  if (!modal) return;

  function open(opts) {
    opts = opts || {};
    if (opts.title)   titleEl.textContent = opts.title;
    if (opts.content) contentEl.innerHTML  = opts.content;
    modal.classList.add('focus-mode--open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    modal.classList.remove('focus-mode--open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  /* Cerrar con el botón o el overlay */
  closeBtn && closeBtn.addEventListener('click', close);
  overlay  && overlay.addEventListener('click', close);

  /* Cerrar con Escape */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('focus-mode--open')) close();
  });

  /* Exponer API global */
  window.Matura = window.Matura || {};
  window.Matura.focusMode = { open, close };
})();

/* ==========================================================
   MATURA COMMAND CENTER — Ctrl/Cmd+K
   API: window.Matura.commandCenter.open() / .close()
========================================================== */
(function () {
  const cc      = document.getElementById('commandCenter');
  const backdrop = cc?.querySelector('.command-backdrop');
  const input    = cc?.querySelector('input');

  if (!cc) return;

  function open() {
    cc.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => input?.focus(), 80);
    if (window.lucide) lucide.createIcons();
  }

  function close() {
    cc.classList.remove('open');
    document.body.style.overflow = '';
    if (input) input.value = '';
  }

  /* Keyboard: Ctrl/Cmd+K to open, Escape to close */
  document.addEventListener('keydown', function (e) {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      cc.classList.contains('open') ? close() : open();
    }
    if (e.key === 'Escape' && cc.classList.contains('open')) close();
  });

  /* Click outside to close */
  backdrop?.addEventListener('click', close);

  /* Keyboard navigation inside results */
  cc.addEventListener('keydown', function (e) {
    const items = [...cc.querySelectorAll('.command-item')];
    const idx   = items.indexOf(document.activeElement);
    if (e.key === 'ArrowDown') { e.preventDefault(); items[Math.min(idx + 1, items.length - 1)]?.focus(); }
    if (e.key === 'ArrowUp')   { e.preventDefault(); items[Math.max(idx - 1, 0)]?.focus(); }
    if (e.key === 'Enter' && idx >= 0) { e.preventDefault(); items[idx].click(); }
  });

  /* Wire up default actions */
  cc.addEventListener('click', function (e) {
    const btn = e.target.closest('[data-action]');
    if (!btn) return;
    close();
    const action = btn.dataset.action;
    if (action === 'ai')       { /* futuro: window.Matura.focusMode.open() */ }
    if (action === 'continue') { const h = document.querySelector('.continue-card .btn'); h && h.click(); }
    if (action === 'exams')    { location.hash = '#/calendario'; }
    if (action === 'ranking')  { location.hash = '#/ranking'; }
    if (action === 'progress') { location.hash = '#/progreso'; }
    if (action === 'glossary') { location.hash = '#/glosario'; }
  });

  /* Expose global API */
  window.Matura = window.Matura || {};
  window.Matura.commandCenter = { open, close };
})();

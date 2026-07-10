/**
 * Matura UX Components
 *
 * Expone helpers globales reutilizables en cualquier vista:
 *
 *   Matura.toast('Texto')                  — toast de éxito
 *   Matura.toast('Texto', 'error')          — toast de error
 *   Matura.toast('Texto', 'warning')        — toast de advertencia
 *   Matura.toast('Texto', 'info')           — toast informativo
 *
 *   Matura.skeleton(container, n)           — inserta n tarjetas skeleton
 *   Matura.clearSkeleton(container)         — elimina los skeletons
 *
 *   Matura.emptyState(container, msg, icon) — muestra un empty state
 *
 * Los tooltips no necesitan JS: solo añade la clase .tooltip-button
 * con un <span class="tooltip"> dentro de cualquier elemento.
 */

(function () {

  /* --------------------------------------------------------
     TOAST
  -------------------------------------------------------- */

  var toastEl = null;
  var toastTimer = null;

  function buildToast() {
    var el = document.createElement('div');
    el.id = 'matura-toast';
    el.className = 'toast';
    el.setAttribute('role', 'status');
    el.setAttribute('aria-live', 'polite');
    el.innerHTML = `
      <i data-lucide="circle-check" class="toast__icon"></i>
      <div>
        <strong class="toast__title"></strong>
        <p class="toast__body"></p>
      </div>`;
    document.body.appendChild(el);
    if (window.lucide) lucide.createIcons({ el });
    return el;
  }

  var TOAST_ICONS = {
    success: 'circle-check',
    error:   'circle-x',
    warning: 'triangle-alert',
    info:    'info',
  };

  /**
   * Muestra un toast.
   * @param {string} title   — Título principal
   * @param {string} [type]  — 'success' | 'error' | 'warning' | 'info'
   * @param {string} [body]  — Texto secundario opcional
   * @param {number} [ms]    — Duración en milisegundos (default 3500)
   */
  function showToast(title, type, body, ms) {
    if (!toastEl) toastEl = buildToast();

    type = type || 'success';
    ms   = ms   || 3500;

    // Update content
    toastEl.querySelector('.toast__title').textContent = title;
    toastEl.querySelector('.toast__body').textContent  = body || '';

    // Update icon
    var iconEl = toastEl.querySelector('.toast__icon');
    if (iconEl) {
      iconEl.setAttribute('data-lucide', TOAST_ICONS[type] || 'info');
    }

    // Update modifier class
    toastEl.className = 'toast toast--' + type + ' toast--visible';

    if (window.lucide) lucide.createIcons();

    // Auto-hide
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toastEl.classList.remove('toast--visible');
    }, ms);
  }

  /* --------------------------------------------------------
     SKELETON
  -------------------------------------------------------- */

  function buildSkeletonCard() {
    var el = document.createElement('div');
    el.className = 'skeleton-card';
    el.innerHTML = `
      <div class="skeleton skeleton-avatar"></div>
      <div class="skeleton-content">
        <div class="skeleton skeleton-line"></div>
        <div class="skeleton skeleton-line short"></div>
      </div>`;
    return el;
  }

  /**
   * Inserta n tarjetas skeleton en el contenedor dado.
   * @param {HTMLElement|string} container — Elemento o selector CSS
   * @param {number} [n]                  — Número de skeletons (default 3)
   */
  function showSkeleton(container, n) {
    var el = typeof container === 'string'
      ? document.querySelector(container)
      : container;
    if (!el) return;
    el.innerHTML = '';
    for (var i = 0; i < (n || 3); i++) {
      el.appendChild(buildSkeletonCard());
    }
  }

  /** Elimina los skeletons de un contenedor. */
  function clearSkeleton(container) {
    var el = typeof container === 'string'
      ? document.querySelector(container)
      : container;
    if (el) el.innerHTML = '';
  }

  /* --------------------------------------------------------
     EMPTY STATE
  -------------------------------------------------------- */

  /**
   * Muestra un empty state dentro del contenedor dado.
   * @param {HTMLElement|string} container
   * @param {string} [msg]  — Mensaje principal
   * @param {string} [icon] — Nombre de icono Lucide (default 'inbox')
   */
  function showEmptyState(container, msg, icon) {
    var el = typeof container === 'string'
      ? document.querySelector(container)
      : container;
    if (!el) return;
    el.innerHTML = `
      <section class="empty-state">
        <i data-lucide="${icon || 'inbox'}"></i>
        <h2>${msg || 'No hay contenido todavía'}</h2>
        <p>Cuando empieces a estudiar aparecerán aquí tus recursos.</p>
      </section>`;
    if (window.lucide) lucide.createIcons();
  }

  /* --------------------------------------------------------
     API PÚBLICA
  -------------------------------------------------------- */

  window.Matura = window.Matura || {};
  window.Matura.toast        = showToast;
  window.Matura.skeleton     = showSkeleton;
  window.Matura.clearSkeleton = clearSkeleton;
  window.Matura.emptyState   = showEmptyState;

})();

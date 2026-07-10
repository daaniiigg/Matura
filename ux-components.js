/**
 * Matura UX Components
 *
 * Expone helpers globales reutilizables en cualquier vista:
 *
 *   Matura.toast('Texto')                        — toast de éxito
 *   Matura.toast('Texto', 'error')               — toast de error
 *   Matura.toast('Texto', 'warning')             — toast de advertencia
 *   Matura.toast('Texto', 'info')                — toast informativo
 *
 *   Matura.skeleton(container, n)                — inserta n tarjetas skeleton
 *   Matura.clearSkeleton(container)              — elimina los skeletons
 *
 *   Matura.emptyState(container, msg, icon)      — muestra un empty state
 *
 *   Matura.modal({ title, body, onConfirm })     — abre el modal global
 *   Matura.closeModal()                          — cierra el modal
 *
 * Los tooltips no necesitan JS: clase .tooltip-button + <span class="tooltip">.
 * Los banners tampoco: clase .banner + .banner-info / .banner-warning / .banner-error.
 */

(function () {

  /* --------------------------------------------------------
     TOAST
  -------------------------------------------------------- */

  var toastEl   = null;
  var toastTimer = null;

  function buildToast() {
    var el = document.createElement('div');
    el.id = 'matura-toast';
    el.className = 'toast';
    el.setAttribute('role', 'status');
    el.setAttribute('aria-live', 'polite');
    el.innerHTML =
      '<i data-lucide="circle-check" class="toast__icon"></i>' +
      '<div>' +
        '<strong class="toast__title"></strong>' +
        '<p class="toast__body"></p>' +
      '</div>';
    document.body.appendChild(el);
    if (window.lucide) lucide.createIcons();
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
   * @param {string} title  — Título principal
   * @param {string} [type] — 'success' | 'error' | 'warning' | 'info'
   * @param {string} [body] — Texto secundario opcional
   * @param {number} [ms]   — Duración en ms (default 3500)
   */
  function showToast(title, type, body, ms) {
    if (!toastEl) toastEl = buildToast();
    type = type || 'success';
    ms   = ms   || 3500;

    toastEl.querySelector('.toast__title').textContent = title;
    toastEl.querySelector('.toast__body').textContent  = body || '';

    var iconEl = toastEl.querySelector('.toast__icon');
    if (iconEl) iconEl.setAttribute('data-lucide', TOAST_ICONS[type] || 'info');

    toastEl.className = 'toast toast--' + type + ' toast--visible';
    if (window.lucide) lucide.createIcons();

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
    el.innerHTML =
      '<div class="skeleton skeleton-avatar"></div>' +
      '<div class="skeleton-content">' +
        '<div class="skeleton skeleton-line"></div>' +
        '<div class="skeleton skeleton-line short"></div>' +
      '</div>';
    return el;
  }

  /**
   * Inserta n tarjetas skeleton en el contenedor dado.
   * @param {HTMLElement|string} container
   * @param {number} [n] — default 3
   */
  function showSkeleton(container, n) {
    var el = typeof container === 'string' ? document.querySelector(container) : container;
    if (!el) return;
    el.innerHTML = '';
    for (var i = 0; i < (n || 3); i++) el.appendChild(buildSkeletonCard());
  }

  function clearSkeleton(container) {
    var el = typeof container === 'string' ? document.querySelector(container) : container;
    if (el) el.innerHTML = '';
  }

  /* --------------------------------------------------------
     EMPTY STATE
  -------------------------------------------------------- */

  /**
   * Muestra un empty state dentro del contenedor.
   * @param {HTMLElement|string} container
   * @param {string} [msg]  — Mensaje principal
   * @param {string} [icon] — Icono Lucide (default 'inbox')
   */
  function showEmptyState(container, msg, icon) {
    var el = typeof container === 'string' ? document.querySelector(container) : container;
    if (!el) return;
    el.innerHTML =
      '<section class="empty-state">' +
        '<i data-lucide="' + (icon || 'inbox') + '"></i>' +
        '<h2>' + (msg || 'No hay contenido todavía') + '</h2>' +
        '<p>Cuando empieces a estudiar aparecerán aquí tus recursos.</p>' +
      '</section>';
    if (window.lucide) lucide.createIcons();
  }

  /* --------------------------------------------------------
     MODAL
  -------------------------------------------------------- */

  var modalEl = null;

  function buildModal() {
    var el = document.createElement('div');
    el.id = 'matura-modal';
    el.className = 'modal-overlay';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-modal', 'true');
    el.innerHTML =
      '<div class="modal-window">' +
        '<div class="modal-header">' +
          '<div>' +
            '<span class="section-badge" id="modal-badge">Sistema</span>' +
            '<h2 id="modal-title">Nuevo componente</h2>' +
          '</div>' +
          '<button class="modal-close" id="modal-close-btn" aria-label="Cerrar">' +
            '<i data-lucide="x"></i>' +
          '</button>' +
        '</div>' +
        '<div class="modal-body" id="modal-body"></div>' +
        '<div class="modal-footer">' +
          '<button class="btn secundario" id="modal-cancel">Cancelar</button>' +
          '<button class="btn" id="modal-confirm">Confirmar</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(el);
    if (window.lucide) lucide.createIcons();

    // Close on overlay click
    el.addEventListener('click', function (e) {
      if (e.target === el) closeModal();
    });
    document.getElementById('modal-close-btn').addEventListener('click', closeModal);
    document.getElementById('modal-cancel').addEventListener('click', function () {
      if (modalEl._onCancel) modalEl._onCancel();
      closeModal();
    });
    document.getElementById('modal-confirm').addEventListener('click', function () {
      if (modalEl._onConfirm) modalEl._onConfirm();
      closeModal();
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && el.classList.contains('modal-overlay--visible')) closeModal();
    });

    return el;
  }

  /**
   * Abre el modal global.
   * @param {object} opts
   * @param {string}   [opts.title]       — Título del modal
   * @param {string}   [opts.badge]       — Texto del badge (default 'Sistema')
   * @param {string}   [opts.body]        — HTML del cuerpo
   * @param {string}   [opts.confirmText] — Texto del botón confirmar
   * @param {string}   [opts.cancelText]  — Texto del botón cancelar
   * @param {boolean}  [opts.hideFooter]  — Oculta el footer
   * @param {Function} [opts.onConfirm]   — Callback al confirmar
   * @param {Function} [opts.onCancel]    — Callback al cancelar
   */
  function openModal(opts) {
    if (!modalEl) modalEl = buildModal();
    opts = opts || {};

    document.getElementById('modal-badge').textContent  = opts.badge       || 'Sistema';
    document.getElementById('modal-title').textContent  = opts.title       || 'Nuevo componente';
    document.getElementById('modal-body').innerHTML     = opts.body        || '';
    document.getElementById('modal-confirm').textContent = opts.confirmText || 'Confirmar';
    document.getElementById('modal-cancel').textContent  = opts.cancelText  || 'Cancelar';

    var footer = modalEl.querySelector('.modal-footer');
    if (footer) footer.style.display = opts.hideFooter ? 'none' : '';

    modalEl._onConfirm = opts.onConfirm || null;
    modalEl._onCancel  = opts.onCancel  || null;

    modalEl.classList.add('modal-overlay--visible');
    if (window.lucide) lucide.createIcons();
  }

  function closeModal() {
    if (modalEl) modalEl.classList.remove('modal-overlay--visible');
  }

  /* --------------------------------------------------------
     API PÚBLICA
  -------------------------------------------------------- */

  window.Matura = window.Matura || {};
  window.Matura.toast         = showToast;
  window.Matura.skeleton      = showSkeleton;
  window.Matura.clearSkeleton = clearSkeleton;
  window.Matura.emptyState    = showEmptyState;
  window.Matura.modal         = openModal;
  window.Matura.closeModal    = closeModal;

})();

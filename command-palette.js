(function () {
  var html = `
    <div class="command-palette" id="command-palette" role="dialog" aria-modal="true" aria-label="Command palette">
      <div class="command-palette__window">
        <div class="command-search">
          <i data-lucide="search"></i>
          <input
            id="command-palette-input"
            type="text"
            placeholder="Buscar módulos, notas, IA o escribir un comando..."
            autocomplete="off"
            spellcheck="false"
          >
          <kbd>Ctrl K</kbd>
        </div>
        <div class="command-section">
          <span class="command-section__title">Acciones rápidas</span>
          <button class="command-item" data-action="ai">
            <i data-lucide="brain"></i>
            <div>
              <strong>Abrir Matura AI</strong>
              <small>Iniciar una conversación</small>
            </div>
          </button>
          <button class="command-item" data-action="continue">
            <i data-lucide="book-open"></i>
            <div>
              <strong>Continuar estudiando</strong>
              <small>Último módulo abierto</small>
            </div>
          </button>
          <button class="command-item" data-action="exam">
            <i data-lucide="graduation-cap"></i>
            <div>
              <strong>Comenzar simulacro</strong>
              <small>Examen rápido</small>
            </div>
          </button>
          <button class="command-item" data-action="notes">
            <i data-lucide="file-text"></i>
            <div>
              <strong>Mis apuntes</strong>
              <small>Abrir documentos recientes</small>
            </div>
          </button>
        </div>
      </div>
    </div>`;

  document.body.insertAdjacentHTML('beforeend', html);

  if (window.lucide) lucide.createIcons();
})();

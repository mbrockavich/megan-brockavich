/* Megan's Library: the shared app frame.
   Load it in <head> on every Library page:
     <script src="library-tabbar.js" data-theme="paper"></script>
   It adds the bottom tab bar, room for it at the bottom of the page, a frosted strip
   behind the iPhone status bar (so sticky bars can sit just under it instead of padding
   for it), a floating ★ button that opens "What my stars mean" (from RATING_LEGEND
   in reading-data.js, on pages that load it), and a soft fade between pages.
   Themes: night, paper, plum. */
(function () {
  const me = document.currentScript;
  const base = new URL('.', me.src);                 // site root, wherever the page lives
  const theme = me.dataset.theme || 'paper';

  const TABS = [
    { href: 'all-books.html', label: 'Books',
      icon: '<path d="M4 5.5C6.5 4 9.5 4 12 6c2.5-2 5.5-2 8-.5V19c-2.5-1.5-5.5-1.5-8 .5-2.5-2-5.5-2-8-.5z"/><path d="M12 6v13.5"/>' },
    { href: 'all-books.html?view=series', label: 'Series',
      icon: '<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>' },
    { href: 'all-books.html?view=favorites', label: 'Favorites',
      icon: '<path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.2a4.3 4.3 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20z"/>' },
    { href: '2026-reading-stats.html', label: 'Stats',
      icon: '<path d="M5 20V12M10 20V6M15 20v-9M20 20V9"/>' },
    { href: 'all-books.html?view=owned', label: 'Owned',
      icon: '<rect x="4" y="4" width="4" height="15" rx="1"/><rect x="9.5" y="6" width="4" height="13" rx="1"/><path d="M15.2 7.3l3.3-.9 2.9 11.8-3.3.9z"/><path d="M3 21h18"/>' },
  ];

  const THEMES = {
    night:     { bg: 'rgba(10,13,24,0.82)',   line: 'rgba(139,144,168,0.18)', fg: '#7d829b', on: '#e2bf83',
                 card: '#12172a', ink: '#e9e7dd', soft: '#8b90a8' },
    paper:     { bg: 'rgba(247,244,239,0.86)', line: '#e4ddd2',               fg: '#8f8778', on: '#b5502f',
                 card: '#ffffff', ink: '#242018', soft: '#6b6455' },
    plum:      { bg: 'rgba(51,25,44,0.86)',    line: 'rgba(217,164,192,0.22)', fg: '#c49ab2', on: '#fdf1f5',
                 card: '#fdf1f5', ink: '#33192c', soft: '#6b3a52' },
  };
  const t = THEMES[theme] || THEMES.paper;

  const css = `
  @view-transition { navigation: auto; }
  :root{ --tabbar-h: 58px; }
  body{ padding-bottom: calc(var(--tabbar-h) + 24px + env(safe-area-inset-bottom)) !important; }
  .lib-tabbar{
    position: fixed; left: 0; right: 0; bottom: 0; z-index: 400;
    display: flex; justify-content: center;
    padding: 0 max(8px, env(safe-area-inset-left)) env(safe-area-inset-bottom) max(8px, env(safe-area-inset-right));
    background: ${t.bg}; border-top: 1px solid ${t.line};
    -webkit-backdrop-filter: saturate(160%) blur(18px); backdrop-filter: saturate(160%) blur(18px);
    font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', sans-serif;
    view-transition-name: lib-tabbar;
  }
  .lib-tabbar-inner{ display: flex; width: 100%; max-width: 560px; }
  .lib-statusbar{
    position: fixed; top: 0; left: 0; right: 0; height: env(safe-area-inset-top); z-index: 401;
    background: ${t.bg}; pointer-events: none;
    -webkit-backdrop-filter: saturate(160%) blur(18px); backdrop-filter: saturate(160%) blur(18px);
  }
  .lib-tabbar .lib-tab{
    flex: 1; height: var(--tabbar-h); display: flex; flex-direction: column;
    align-items: center; justify-content: center; gap: 3px;
    color: ${t.fg}; text-decoration: none; font-size: 10.5px; font-weight: 500; letter-spacing: 0.01em;
    text-transform: none; font-family: inherit; line-height: 1.1; margin: 0; padding: 0;
    -webkit-tap-highlight-color: transparent; transition: color .15s, transform .1s;
  }
  .lib-tab svg{ width: 24px; height: 24px; fill: none; stroke: currentColor; stroke-width: 1.7;
    stroke-linecap: round; stroke-linejoin: round; }
  .lib-tab[aria-current="page"]{ color: ${t.on}; font-weight: 600; }
  .lib-tab[aria-current="page"] svg{ stroke-width: 2.1; }
  .lib-tab:active{ transform: scale(0.92); }
  .lib-tab:focus-visible{ outline: 2px solid ${t.on}; outline-offset: -6px; border-radius: 10px; }
  /* floating ★: opens the rating guide */
  .lib-starbtn{
    position: fixed; right: max(14px, env(safe-area-inset-right)); z-index: 390;
    bottom: calc(var(--tabbar-h) + env(safe-area-inset-bottom) + 14px);
    width: 44px; height: 44px; border-radius: 50%; border: 1px solid ${t.line};
    background: ${t.card}; color: #c8963f; font-size: 21px; line-height: 1; cursor: pointer;
    box-shadow: 0 4px 14px rgba(0,0,0,0.16); -webkit-tap-highlight-color: transparent;
    display: flex; align-items: center; justify-content: center; padding: 0 0 2px;
  }
  .lib-starbtn:active{ transform: scale(0.92); }
  .lib-starbtn:focus-visible{ outline: 2px solid ${t.on}; outline-offset: 2px; }
  .lib-stars-overlay{
    position: fixed; inset: 0; z-index: 600; display: none; align-items: flex-end; justify-content: center;
    background: rgba(0,0,0,0.38); padding: 16px 12px calc(var(--tabbar-h) + env(safe-area-inset-bottom) + 12px);
  }
  .lib-stars-overlay.open{ display: flex; }
  .lib-stars-panel{
    position: relative; width: 100%; max-width: 420px; background: ${t.card}; color: ${t.ink};
    border-radius: 16px; padding: 18px 18px 12px; box-shadow: 0 20px 50px rgba(0,0,0,0.25);
    font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', sans-serif;
  }
  .lib-stars-panel h2{ font-size: 16px; font-weight: 700; margin: 0 0 8px; padding-right: 40px; }
  .lib-stars-close{ position: absolute; top: 10px; right: 10px; width: 32px; height: 32px; border-radius: 50%;
    border: 0; background: rgba(127,127,127,0.14); color: ${t.soft}; font-size: 13px; cursor: pointer; }
  .lib-stars-row{ display: flex; align-items: center; gap: 12px; padding: 8px 0; border-top: 1px solid ${t.line}; }
  .lib-stars-row .s{ flex: 0 0 92px; color: #c8963f; font-size: 14px; letter-spacing: 1px; }
  .lib-stars-row .s .dim{ color: ${t.line}; }
  .lib-stars-row .x{ font-size: 13px; line-height: 1.35; }
  @media print{ .lib-tabbar, .lib-statusbar, .lib-starbtn{ display: none; } }
  @media (prefers-reduced-motion: reduce){
    ::view-transition-group(*), ::view-transition-old(*), ::view-transition-new(*){ animation: none !important; }
  }`;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  function build() {
    const here = location.pathname.split('/').pop() || 'all-books.html';
    // Books, Series and Favorites are one page: ?view= picks the tab (old #series links too)
    const params = new URLSearchParams(location.search);
    const view = params.get('view') || (location.hash === '#series' ? 'series' : '');
    const nav = document.createElement('nav');
    nav.className = 'lib-tabbar';
    nav.setAttribute('aria-label', 'Library');
    nav.innerHTML = '<div class="lib-tabbar-inner">' + TABS.map(tab => {
      const url = new URL(tab.href, base).href;
      const [tabPage, tabQuery] = tab.href.split('?');
      const samePage = location.href.split(/[?#]/)[0] === new URL(tabPage, base).href ||
        (here === tabPage && location.href.startsWith(base.href));
      const current = samePage && (new URLSearchParams(tabQuery || '').get('view') || '') === view;
      return `<a class="lib-tab" href="${url}"${current ? ' aria-current="page"' : ''}>` +
        `<svg viewBox="0 0 24 24" aria-hidden="true">${tab.icon}</svg><span>${tab.label}</span></a>`;
    }).join('') + '</div>';
    document.body.appendChild(nav);
    const bar = document.createElement('div');
    bar.className = 'lib-statusbar';
    bar.setAttribute('aria-hidden', 'true');
    document.body.appendChild(bar);
    buildStars();
  }
  function buildStars() {
    if (typeof RATING_LEGEND === 'undefined') return;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'lib-starbtn';
    btn.setAttribute('aria-label', 'What my stars mean');
    btn.setAttribute('aria-haspopup', 'dialog');
    btn.textContent = '★';
    const overlay = document.createElement('div');
    overlay.className = 'lib-stars-overlay';
    overlay.innerHTML = '<div class="lib-stars-panel" role="dialog" aria-modal="true" aria-labelledby="libStarsTitle">' +
      '<button type="button" class="lib-stars-close" aria-label="Close">✕</button>' +
      '<h2 id="libStarsTitle">★ What my stars mean</h2>' +
      RATING_LEGEND.map(r => {
        const dim = Math.max(5 - r.n, 0);
        return `<div class="lib-stars-row"><div class="s">${'★'.repeat(r.n)}${dim ? `<span class="dim">${'★'.repeat(dim)}</span>` : ''}</div><div class="x">${r.text}</div></div>`;
      }).join('') + '</div>';
    const close = () => { overlay.classList.remove('open'); btn.focus({ preventScroll: true }); };
    btn.addEventListener('click', () => { overlay.classList.add('open'); overlay.querySelector('.lib-stars-close').focus({ preventScroll: true }); });
    overlay.addEventListener('click', e => { if (e.target === overlay || e.target.closest('.lib-stars-close')) close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && overlay.classList.contains('open')) close(); });
    document.body.appendChild(btn);
    document.body.appendChild(overlay);
  }
  if (document.body) build(); else document.addEventListener('DOMContentLoaded', build);
})();

/* Megan's Library: the shared app frame.
   Load it in <head> on every Library page:
     <script src="library-tabbar.js" data-theme="paper"></script>
   (use "../library-tabbar.js" from a sub-folder).
   It adds the bottom tab bar, room for it at the bottom of the page, and a soft fade
   between pages. Themes: night, paper, plum, blush, parchment. */
(function () {
  const me = document.currentScript;
  const base = new URL('.', me.src);                 // site root, wherever the page lives
  const theme = me.dataset.theme || 'paper';

  const TABS = [
    { href: 'library.html', label: 'Shelf',
      icon: '<path d="M4 20h16M6 20V6M10 20V4M14 20V8M18 20l-2.6-11.5"/>' },
    { href: 'all-books.html', label: 'Books',
      icon: '<path d="M4 5.5C6.5 4 9.5 4 12 6c2.5-2 5.5-2 8-.5V19c-2.5-1.5-5.5-1.5-8 .5-2.5-2-5.5-2-8-.5z"/><path d="M12 6v13.5"/>' },
    { href: 'series-tracker.html', label: 'Series',
      icon: '<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>' },
    { href: '2026-reading-stats.html', label: 'Stats',
      icon: '<path d="M5 20V12M10 20V6M15 20v-9M20 20V9"/>' },
    { href: 'book-club.html', label: 'Club',
      icon: '<path d="M7 3h10l-1 6a4 4 0 0 1-8 0z"/><path d="M12 13v7M8.5 20h7"/>' },
  ];

  const THEMES = {
    night:     { bg: 'rgba(10,13,24,0.82)',   line: 'rgba(139,144,168,0.18)', fg: '#7d829b', on: '#e2bf83' },
    paper:     { bg: 'rgba(247,244,239,0.86)', line: '#e4ddd2',               fg: '#8f8778', on: '#b5502f' },
    plum:      { bg: 'rgba(51,25,44,0.86)',    line: 'rgba(217,164,192,0.22)', fg: '#c49ab2', on: '#fdf1f5' },
    blush:     { bg: 'rgba(255,242,247,0.86)', line: 'rgba(194,59,116,0.18)',  fg: '#b07f98', on: '#c23b74' },
    parchment: { bg: 'rgba(23,20,15,0.86)',    line: '#3A342A',               fg: '#a8987a', on: '#ECE1C6' },
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
  @media print{ .lib-tabbar{ display: none; } }
  @media (prefers-reduced-motion: reduce){
    ::view-transition-group(*), ::view-transition-old(*), ::view-transition-new(*){ animation: none !important; }
  }`;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  function build() {
    const here = location.pathname.split('/').pop() || 'library.html';
    const nav = document.createElement('nav');
    nav.className = 'lib-tabbar';
    nav.setAttribute('aria-label', 'Library');
    nav.innerHTML = '<div class="lib-tabbar-inner">' + TABS.map(tab => {
      const url = new URL(tab.href, base).href;
      const current = location.href.split(/[?#]/)[0] === url || (here === tab.href && location.href.startsWith(base.href));
      return `<a class="lib-tab" href="${url}"${current ? ' aria-current="page"' : ''}>` +
        `<svg viewBox="0 0 24 24" aria-hidden="true">${tab.icon}</svg><span>${tab.label}</span></a>`;
    }).join('') + '</div>';
    document.body.appendChild(nav);
  }
  if (document.body) build(); else document.addEventListener('DOMContentLoaded', build);
})();

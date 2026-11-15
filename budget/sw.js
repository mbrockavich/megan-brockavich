/* Can we afford it? service worker.
   Caches only the app shell so it opens fast. Never caches budget numbers or answers:
   those come from the Worker every time and the page keeps its own last copy. */
const CACHE = 'cwai-shell-v21';
const SHELL = ['index.html', 'manifest.json', 'icons/icon-192.png', 'icons/apple-touch-icon.png'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('cwai-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== self.location.origin || !url.pathname.includes('/budget/')) return;
  // network first, fall back to cache when offline
  e.respondWith(fetch(e.request, { cache: 'no-cache' }).then(res => {
    if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(url.origin + url.pathname, copy)); }
    return res;
  }).catch(() => caches.match(url.origin + url.pathname)));
});

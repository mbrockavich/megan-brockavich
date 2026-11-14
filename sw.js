/* Fresh Ink service worker.
   - The app itself (page, data, icons) opens instantly and works offline. It's served from the
     cache and quietly refreshed in the background, and the page is told when new data arrives.
   - Book covers and fonts are cached the first time they load, so they also show offline.
   - It ignores every other page on the site (library, trackers, etc.). */
const SHELL_CACHE = 'fresh-ink-shell-v2';   // bumped so every phone drops its old saved copy once
const RUNTIME_CACHE = 'fresh-ink-runtime-v1';
const MAX_RUNTIME = 600;
const SHELL = ['watchlist.html', 'watchlist-data.js', 'manifest.webmanifest',
  'fresh-ink/icon-192.png', 'fresh-ink/icon-512.png', 'fresh-ink/icon-maskable-512.png', 'fresh-ink/apple-touch-icon.png'];
const IMG_HOSTS = ['i.gr-assets.com', 's.gr-assets.com', 'covers.openlibrary.org', 'books.google.com', 'is1.mzstatic.com',
  'images-na.ssl-images-amazon.com', 'm.media-amazon.com'];
const FONT_HOSTS = ['fonts.googleapis.com', 'fonts.gstatic.com'];

self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const c = await caches.open(SHELL_CACHE);
    await Promise.all(SHELL.map(u => c.add(new Request(u, { cache: 'reload' })).catch(() => {})));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k.startsWith('fresh-ink-') && k !== SHELL_CACHE && k !== RUNTIME_CACHE) await caches.delete(k);
    await self.clients.claim();
  })());
});

const isShell = url => url.origin === self.location.origin &&
  SHELL.some(p => url.pathname.endsWith('/' + p) || url.pathname === '/' + p);

async function notifyUpdated() {
  for (const c of await self.clients.matchAll({ type: 'window' })) c.postMessage({ type: 'fresh-ink-updated' });
}

async function staleWhileRevalidate(req, url) {
  const cache = await caches.open(SHELL_CACHE);
  const key = url.origin + url.pathname;            // ignore ?query strings
  const cached = await cache.match(key);
  const cachedForCompare = cached ? cached.clone() : null;   // clone BEFORE the original is handed to the page
  // 'no-cache' = always ask the server if the file changed. Without it GitHub Pages' 10-minute browser cache
  // can hide an update for a while.
  const network = fetch(req.mode === 'navigate' ? key : req.url, { cache: 'no-cache' }).then(async res => {
    if (res && res.ok) {
      if (cachedForCompare) {
        const [a, b] = await Promise.all([cachedForCompare.text(), res.clone().text()]);
        if (a !== b) { await cache.put(key, res.clone()); notifyUpdated(); }
      } else await cache.put(key, res.clone());
    }
    return res;
  }).catch(() => null);
  if (cached) return cached;
  return (await network) || new Response('Offline and not cached yet.', { status: 503, headers: { 'Content-Type': 'text/plain' } });
}

async function trim(cache) {
  const keys = await cache.keys();
  for (let i = 0; i < keys.length - MAX_RUNTIME; i++) await cache.delete(keys[i]);
}

/* Cache cross-origin images and fonts only when the host allows CORS. Opaque responses are never
   stored (browsers count each one as several MB of storage). Otherwise it just passes through. */
async function cacheFirstCors(req) {
  const cache = await caches.open(RUNTIME_CACHE);
  const hit = await cache.match(req.url);
  if (hit) return hit;
  try {
    const res = await fetch(new Request(req.url, { mode: 'cors', credentials: 'omit' }));
    if (res.ok) { await cache.put(req.url, res.clone()); trim(cache); return res; }
  } catch (e) { /* host does not allow CORS: fall through */ }
  return fetch(req);
}

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (isShell(url)) { e.respondWith(staleWhileRevalidate(req, url)); return; }
  if (req.destination === 'image' && IMG_HOSTS.includes(url.hostname)) { e.respondWith(cacheFirstCors(req)); return; }
  if (FONT_HOSTS.includes(url.hostname)) { e.respondWith(cacheFirstCors(req)); return; }
});

const cacheName = 'cache-v1';
const precacheResources = [
  'https://cdn.jsdelivr.net/npm/gun/gun.min.js',
  'https://cdn.jsdelivr.net/npm/gun/lib/unset.js',
  'https://cdn.jsdelivr.net/npm/gun/sea.js',
  'https://cdn.jsdelivr.net/npm/gun/lib/radix.js',
  'https://cdn.jsdelivr.net/npm/gun/lib/radisk.js',
  'https://cdn.jsdelivr.net/npm/gun/lib/store.js',
  'https://cdn.jsdelivr.net/npm/gun/lib/rindexed.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(precacheResources)));
});


self.addEventListener('fetch', (event) => event.respondWith(
  caches.match(event.request).then((cachedResponse) => {
    if (cachedResponse) return cachedResponse;

    return fetch(event.request);
  }),
));
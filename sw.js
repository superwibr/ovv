const cacheName = 'cache-v1';
const precacheResources = [
  '/',
  '/index.html',
  '/css/main.css',
  '/css/hud.css',
  '/src/index.js',
  '/src/hud.js',
  '/src/gun.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(precacheResources)));
});


self.addEventListener('fetch', (event) => {
  console.log('Fetch intercepted for:', event.request.url);
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request);
    }),
  );
});
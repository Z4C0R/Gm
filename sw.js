// sw.js (Service Worker)
const CACHE_NAME = 'juego-explorador-v1';
const urlsToCache = [
  'index.html',
  'manifest.json',
  'https://cdnjs.cloudflare.com/ajax/libs/phaser/3.55.2/phaser.min.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

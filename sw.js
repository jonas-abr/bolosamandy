// Service Worker básico para permitir a instalação do PWA offline
const CACHE_NAME = 'bolos-amandy-v1';
const assets = [
  './',
  './index.html',
  './style.css',
  './logotipo.jpg',
  './manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
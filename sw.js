const CACHE_VERSION = 'kansai-trip-v28';
const APP_SHELL = [
  './',
  './index.html',
  './css/app.css?v=11',
  './js/bootstrap.js?v=28',
  './js/app.js?v=11',
  './data/trip.js?v=10',
  './data/core.js',
  './data/places.js',
  './data/reservations.js',
  './data/journeys.js',
  './data/shopping.js',
  './data/info.js',
  './data/plan-helpers.js',
  './data/days/d1.js',
  './data/days/d2.js',
  './data/days/d3.js',
  './data/days/d4.js',
  './data/days/d5.js',
  './data/days/d6.js',
  './data/days/d7.js',
  './data/days/d8.js',
  './data/validate.js?v=8',
  './data/validate.js?v=10',
  './manifest.webmanifest',
  './icons/favicon-32.png',
  './icons/apple-touch-icon.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-192.png',
  './icons/icon-maskable-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_VERSION)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const requestUrl = new URL(event.request.url);
  if (requestUrl.origin !== self.location.origin) return;

  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_VERSION).then((cache) => cache.put('./index.html', copy));
          return response;
        })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      const network = fetch(event.request)
        .then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE_VERSION).then((cache) => cache.put(event.request, copy));
          }
          return response;
        })
        .catch(() => cached);

      return cached || network;
    })
  );
});

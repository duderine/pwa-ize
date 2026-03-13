const CACHE_NAME = 'pwa-ize-v1';
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// O segredo: o SW precisa responder para o navegador manter o contexto de "App"
self.addEventListener('fetch', (event) => {
    event.respondWith(fetch(event.request));
});

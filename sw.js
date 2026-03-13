self.addEventListener('install', (e) => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(clients.claim()));

self.addEventListener('fetch', (e) => {
  // Não faz cache de nada, apenas permite a passagem para não quebrar sites externos
  e.respondWith(fetch(e.request));
});

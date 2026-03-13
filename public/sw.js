self.addEventListener('install', (e) => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(clients.claim()));
self.addEventListener('fetch', (e) => {
    // Permite que o redirecionamento aconteça sem interceptação
    e.respondWith(fetch(e.request));
});

importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.5.1/workbox-sw.js');

if (workbox) {
    // Precaching: cache essential resources
    workbox.precaching.precacheAndRoute([
        { url: 'css/style.css', revision: null },
        { url: 'js/main.js', revision: null },
        { url: 'js/Tienda.js', revision: null },
        { url: 'js/Producto.js', revision: null },
        { url: 'js/Chromebook.js', revision: null },
        { url: 'js/MacBook.js', revision: null },
        { url: 'js/WindowsLaptop.js', revision: null },
        { url: 'offline.html', revision: null },
    ]);

    // Default strategy: Network Only
    workbox.routing.setDefaultHandler(new workbox.strategies.NetworkOnly());

    // Offline fallback strategy: Display offline.html
    workbox.recipes.offlineFallback({ pageFallback: 'offline.html' });

    // Cache CSS and JS files with StaleWhileRevalidate strategy
    workbox.routing.registerRoute(
        /\.(?:css|js)$/,
        new workbox.strategies.StaleWhileRevalidate({
            cacheName: 'mi-aplicacion'
        })
    );

    // Add event listener for detecting offline status
    self.addEventListener('fetch', (event) => {
        if (!navigator.onLine) {
            // Respond with a custom offline message
            const response = new Response("You are offline.", {
                headers: { 'Content-Type': 'text/plain' },
            });
            event.respondWith(response);
        }
    });
}

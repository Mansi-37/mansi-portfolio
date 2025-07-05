const cacheName = "portfolio-cache-v1";
const filesToCache = [
  "portfolio.html",
  "style.css",
  "flowers.jpg",
  "fad23642f33526d518a2345908cde73d.jpg",
  "Cafe.jpg",
  "fashion(myproject).jpeg",
  "icon-192.png",
  "icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(filesToCache).catch((err) => {
        console.error("❌ Failed to cache files:", err);
      });
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

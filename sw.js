const CACHE_NAME = "greek-wisdom-v17";
const FILES = [
  "./",
  "./index.html",
  "./styles.css?v=17",
  "./app.js?v=17",
  "./manifest.webmanifest?v=17",
  "./assets/icon.svg",
  "./assets/apple-touch-icon.png",
  "./assets/icon-192.png",
  "./assets/icon-512.png",
  "./assets/deities/nike.png",
  "./assets/deities/persephone.png",
  "./assets/deities/hecate.png",
  "./assets/deities/eros.png",
  "./assets/deities/dionysus.png",
  "./assets/deities/hermes.png",
  "./assets/deities/hera.png",
  "./assets/deities/hephaestus.png",
  "./assets/deities/artemis.png",
  "./assets/deities/hestia.png",
  "./assets/deities/ares.png",
  "./assets/deities/athena.png",
  "./assets/deities/apollo.png",
  "./assets/deities/hades.png",
  "./assets/deities/demeter.png",
  "./assets/deities/poseidon.png",
  "./assets/deities/asclepius.png",
  "./assets/deities/zeus.png",
  "./assets/deities/aphrodite.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  // Network-first for page navigations so the newest app always loads when online.
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put("./index.html", copy)).catch(() => {});
          return response;
        })
        .catch(() => caches.match("./index.html").then((cached) => cached || caches.match("./")))
    );
    return;
  }

  // Cache-first for versioned assets and images (fast + offline).
  event.respondWith(
    caches.match(request).then((cached) => cached || fetch(request).catch(() => caches.match("./index.html")))
  );
});

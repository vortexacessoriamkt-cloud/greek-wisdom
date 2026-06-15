const CACHE_NAME = "greek-wisdom-v11";
const FILES = [
  "./",
  "./index.html",
  "./styles.css?v=11",
  "./app.js?v=11",
  "./manifest.webmanifest?v=11",
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
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request).catch(() => caches.match("./index.html")))
  );
});

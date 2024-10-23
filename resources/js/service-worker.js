var CACHE_NAME = "soundboard-cache-v2";

var urlsToCache = [
  "/",
  "/index.html",
  "/resources/css/style.css",
  "/resources/js/script.js",
  "/resources/sounds/SOUND_A.mp3",
  "/resources/sounds/SOUND_C.mp3",
  "/resources/sounds/SOUND_D.mp3",
  "/resources/sounds/SOUND_E.mp3",
  "/resources/sounds/SOUND_F.mp3",
  "/resources/sounds/SOUND_G.mp3",
  "/resources/sounds/SOUND_H.mp3",
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Cache geöffnet");
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response; // Cache verwenden, wenn verfügbar
      }
      // Ansonsten Netzwerk anfragen
      return fetch(event.request).catch((error) => {
        console.log(error);
      });
    })
  );
});

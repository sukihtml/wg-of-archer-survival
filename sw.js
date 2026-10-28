const CACHE = "wg-archer-v1";

const ASSETS = [
  "./",
  "index.html",
  "manifest.json",
  "wg of archer/style.css",
  "wg of archer/core.js",
  "wg of archer/input.js",
  "wg of archer/particles.js",
  "wg of archer/player.js",
  "wg of archer/projectiles.js",
  "wg of archer/character.js",
  "wg of archer/spear.js",
  "wg of archer/game-state.js",
  "wg of archer/fitur.js",
  "wg of archer/enemies.js",
  "wg of archer/squad.js",
  "wg of archer/squad-render.js",
  "wg of archer/enemies-render.js",
  "wg of archer/hud.js",
  "wg of archer/combo.js",
  "wg of archer/world.js",
  "wg of archer/menu.js",
  "wg of archer/audio.js",
  "wg of archer/main.js"
];

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) {
      return c.addAll(ASSETS);
    }).then(function () {
      return self.skipWaiting();
    })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.filter(function (k) {
          return k !== CACHE;
        }).map(function (k) {
          return caches.delete(k);
        })
      );
    }).then(function () {
      return self.clients.claim();
    })
  );
});

self.addEventListener("fetch", function (e) {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  e.respondWith(
    fetch(req).then(function (res) {
      if (res && res.ok) {
        const copy = res.clone();
        caches.open(CACHE).then(function (c) {
          c.put(req, copy);
        });
      }
      return res;
    }).catch(function () {
      return caches.match(req).then(function (r) {
        return r || caches.match("index.html");
      });
    })
  );
});

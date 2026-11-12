const CACHE = "wg-archer-v7";

const ASSETS = [
  "./",
  "index.html",
  "manifest.json",
  "wg of archer/style.css",
  "wg of archer/gl2d.js",
  "wg of archer/core.js",
  "wg of archer/archer-light.js",
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
  "wg of archer/duel.js",
  "wg of archer/pvp.js",
  "wg of archer/combo.js",
  "wg of archer/world.js",
  "wg of archer/menu.js",
  "wg of archer/audio.js",
  "wg of archer/main.js",
  "wg of archer/online.js"
];

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) {
      return Promise.all(ASSETS.map(function (u) {
        return c.add(new Request(u, { cache: "reload" })).catch(function () {});
      }));
    }).then(function () {
      return self.skipWaiting();
    })

'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f9c845b109967267c08e0b41d2a31e0f",
"assets/AssetManifest.bin.json": "bc07bbab6bcb167e708dcdcc32ef0148",
"assets/AssetManifest.json": "87b229301fe897d84d28ca124364c989",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "cfe74e3bc36640b8cc53ea814c1ab028",
"assets/images/avatar.jpg": "9378105334882dd1f615e482d940b595",
"assets/images/card.jpg": "194684b03b6890b568a38c22f1a9deef",
"assets/images/event.JPG": "2763c2e33aa52077569a3c0b4b34b716",
"assets/images/file.enc": "77e9281dfce84b97ccfae375730f0613",
"assets/images/grade.jpg": "475910f1db50f37e5850f3e2b30e7e1f",
"assets/images/grade2.jpg": "9fa1eb7d8974b54535d996b092169f0c",
"assets/images/last.JPG": "6281e419ae7ad0b6f54ad9d1a76710c1",
"assets/images/last_1.jpg": "4922aa6abe2f1bd8fc6b0def6193e397",
"assets/images/last_2.jpg": "5522040ad74109b6a8f8b976f566d686",
"assets/images/logo.png": "c59b93a48534592c04b766e6600a4706",
"assets/images/logo_full.png": "5141fb6a4416e22dfb361db7e1ca24aa",
"assets/images/logo_super.png": "80523fa76170431f6d57b09b7bfb0643",
"assets/images/logo_super_full.png": "505977cdfc557b378cf2c25abb91d7ec",
"assets/images/logo_uptown.png": "55bc2760b8eea5d6cee6230bc43e5f60",
"assets/images/logo_uptown_full.png": "5b1c9df8e5f8fa1b44e05de613a7233e",
"assets/images/meal.jpg": "e34831c5794a8d0c51a521cb88bca681",
"assets/images/mural4.jpg": "5d4965b522d69ba4a0a3f43d0452892b",
"assets/images/mural5.jpg": "a838dcd384ba4dc87ef2fac69720a405",
"assets/images/sample.png": "e262afdc98e831b27d560cc8c2d1760e",
"assets/images/shot.png": "e5dbc752b9a1561b5908c2aaf3f10ceb",
"assets/images/splash_food_1.png": "583e1342e0b6c97145a578e46cca8e1b",
"assets/images/super.jpg": "84b4d2bb6fa28ada7cfb13f23dc76854",
"assets/images/super.png": "e82bbea6de7bc3b9aba287541f7775c6",
"assets/images/super_drawer.jpg": "7051a7a60a8cfa321dfaa3a3ee89531e",
"assets/images/super_mc_mural.jpg": "18c656a960dcdecc6f0960509700b0ff",
"assets/images/tes1.png": "26adc72fda6aac40ecbee2a4408e34ff",
"assets/images/tes2.png": "f4e5e312bc78c63a48e39cf6622ec0ce",
"assets/images/tesa.jpg": "3206acedc72b74c0b15744a3983b9f59",
"assets/images/tesb.jpg": "81a64aabd80e9c536fdfcc109ed79e79",
"assets/images/uptown_mural.jpg": "d2ce19ba0ecef782596b9b2db5eef3fd",
"assets/images/uptown_sample.png": "5d8ffcab1811a9f90aafc8d6b5800ca5",
"assets/images/white.png": "4a4910a9c404723725ed23196c3b6e1e",
"assets/NOTICES": "894bb7d10695a79df7cb8126848ae25e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "33bf486c1962019bb231f6ca2130bb82",
"/": "33bf486c1962019bb231f6ca2130bb82",
"main.dart.js": "aa9f72e693c1ff78c2c5764ad0c0ca31",
"manifest.json": "7d7bbe30c5473c684e1da9e7bc0b4199",
"version.json": "a061dc5ea415576f62ea7daaf8faa467"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

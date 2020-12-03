'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "d174825139482f489130d95a15e482ac",
"index.html": "ee37ac8d201d0a611ab56a7335820261",
"/": "ee37ac8d201d0a611ab56a7335820261",
"main.dart.js": "b72dae050dca644978a71f15ed01359a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7d398125904b6a6a5b077af2be058f58",
".git/config": "42bd485a51068ca67ebe227a647bc1f6",
".git/objects/57/a6c698b0e05de4a6bc4cb44500d2fe0d7e3399": "97d6371594da1bfc7535fb9af09fad64",
".git/objects/57/aa893826db03a74c98480093e5c9942798391b": "b87088fea4f7698243faf09c3ebfc645",
".git/objects/57/b8e63cdcc08c03e405e867426bc9efed2070a3": "fd1280a68427d420072b219ddbb676a6",
".git/objects/3d/1cbcb41a8e4d07c261ac4c45c80c0748404096": "d0c49cd4f1b0a304d3c6f593492bfef1",
".git/objects/9c/eb1e69003e33f1b14bb1642fb34f03622fcbe6": "1183e0b335dc2c2b9a5d87a312f8a9c6",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/e2/e0d4aa38cf84f0eca92706a536e04485e9b7b9": "86f53549f558d5b5189566e8baccae51",
".git/objects/c0/a18a9d2bd2d0346d52425c2718d7db4359479a": "da6040a83940659694bad2526b857282",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/fe/2bfcf95c1c341704e5d266a433b006efec5617": "19c6f6427a9329c00cc6642a04660850",
".git/objects/c6/d5524300bbb89828c7ad13574d731233313e50": "01ad3170e0c779eaa1f1c6e63f4a0284",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/7d/344e1dff665afa24224b0990810f580d9e37a6": "d1ceb4b7b498611ca3950a41de4c155f",
".git/objects/42/02b186b31297a0c4ffd2eb7002e6f7ad7be863": "4d2f97e9cc0ed008c82b48f8b7f59e2c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/9da5869440b637358b517ca2540a2f561466a6": "c4bbcbb857e119e8e571fb73aa619ffb",
".git/objects/81/600510fe19073c96c1d26def7a505e209ba3ea": "c57643839cf46b0ca41f5cd33fba3f35",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/1867ee0329a3c6295704d87cb1df3c43990036": "b633fd042b7d5fcddda74b1b44d9ed37",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/65/763339407ee456c8dd897b650b2dfba09c5ebe": "02075bd9f1d1e6f033be9a139a7ad746",
".git/objects/54/00e0dead3573f3043f8b598f74e727c85ed46f": "96ae74fb4e5c2063c6858fd554bc1517",
".git/objects/5b/7f564a967e08bad8b168f96d3f64c62f4a3a21": "49fbf526c68b0e3f92cb2520c99f5637",
".git/objects/bf/89141f16f3d58abc6277ef7b7fc382a69f73db": "df028a380cb0cd87ede88062c2487af4",
".git/objects/b1/bf543a6eeebce0881d7b3ad55ba2f72132dc25": "90d340e1405b7e8ecf892b4d823fdd98",
".git/objects/a9/f0d88bb0691236acbc02bfdc4092a92c6daedc": "686044aa3afbe00cad3edb0e16a9b418",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/fa/1cc6c2595edb570a3690cfb34b311cd2c26b6e": "1fdd1bccb37ca74eee415597aa9e6e1e",
".git/objects/83/ca2a1b1383b605aef0413213e34e86b20ba0c8": "717e4fe46ca9701a4d72826573e25c7f",
".git/objects/77/ff6aba3d0cb49f2ef4623ec64c45652b794ddb": "424f158da34089ee61cb762b6b1ad471",
".git/objects/1d/4bf2b5265bfc9dcb92eeabd5d3691035361a9a": "dc87582ee88a2ed863ae3025b0aa4999",
".git/objects/1d/c77fc27131805ae6bb9fa712de90656305267a": "240f8ba494601e179173cf82bd3604ca",
".git/objects/76/bf50541ef9ff6fca7db699d6b69d24995a3fdb": "5fc1ba6943593f21616b48dc57eb1419",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9ec6a299d24cf863dbe3264976b10d50",
".git/logs/refs/heads/master": "9ec6a299d24cf863dbe3264976b10d50",
".git/logs/refs/remotes/origin/master": "2e80a44ea0814f7a330ab1d6a55835fc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "29b73a47b17f06d128d932b862ff9dff",
".git/refs/remotes/origin/master": "29b73a47b17f06d128d932b862ff9dff",
".git/index": "be428267084406378c31ff42ff52f91d",
".git/COMMIT_EDITMSG": "b0a52ce88b5f28c4c4e29b2cd7d18d81",
"assets/AssetManifest.json": "5f693ff98d959c9499b88514d22a25d7",
"assets/NOTICES": "1aca47d19c2d7d6a0f88c6bf488b7094",
"assets/FontManifest.json": "f20fb3681f2c831178ea768ff0c2fc37",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/images/background.png": "b304ce4a575cac081e02ebad9248457d",
"assets/assets/images/logo.png": "fc3af19da4fbf2cd7f975894447e5620",
"assets/assets/icons/user.png": "88262bf934e0f6a5c205619d2448e01f",
"assets/assets/icons/password.png": "ffac0fa5d3293e07f088726aaeb21d11",
"assets/assets/icons/google.png": "2b7eadf901a2b911d63e1c4fcfe66edc",
"assets/assets/icons/facebook.png": "297e138ef5de8741731571c6491ac6f2",
"assets/assets/fonts/Square.ttf": "0d06824c043064c702d9a141cb744e00",
"assets/assets/fonts/AnonymousPro-Bold.ttf": "401e77d048b500d714375a77d4ca4326",
"assets/assets/fonts/AnonymousPro-Regular.ttf": "418d6668afcddb7714104f43bfb39657"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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

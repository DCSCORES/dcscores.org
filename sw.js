---
---

const version = '{{site.time | date: '%Y%m%d%H%M%S'}}::';
const cacheName = `dcscores::${version}`;

{% raw %}
var cacheFiles = [
  '/',
  '/impact/',
  '/about-us/mission-and-history/',
];
{% endraw %}





{% raw %}
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName)
    .then(function(cache) {
      //console.log('Opened cache');
      return cache.addAll(cacheFiles);
    })
  );
});
{% endraw %}





{% raw %}
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Grab the asset from SW cache.
        if (response) {
          return response;
        }
        return fetch(event.request);
    }).catch(function() {
      // Can't access the network return an offline page from the cache
      return caches.match('/offline/');
    })
  );
});
{% endraw %}





{% raw %}
// Empty out any caches that don’t match the ones listed.
self.addEventListener('activate', function(event) {
  {% endraw %}

  const cacheWhitelist = `dcscores::${version}`;

  {% raw %}
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
{% endraw %}

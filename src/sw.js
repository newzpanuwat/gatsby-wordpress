// Required stuff
importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js'
)
console.log('Hello from sw.js');
// The plugin will pass the files to cache here
workbox.precaching.precacheAndRoute([])


// Another things
self.addEventListener('push', function (event) {
  console.log('[Service Worker] Push Received.');
  console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

  const title = 'Push Codelab';
  const options = {
    body: 'Yay it works.'
  };

  event.waitUntil(self.registration.showNotification(title, options));
});
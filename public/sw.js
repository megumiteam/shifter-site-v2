/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "asset-manifest.json",
    "revision": "a6a5976ec0daec25d1e0b5ed2fbd8413"
  },
  {
    "url": "assets/favicon/favicon-16x16.png",
    "revision": "6e1b9c138332350d1bc8c4df3048d339"
  },
  {
    "url": "assets/favicon/favicon-32x32.png",
    "revision": "458476695d9f85b8a006de9dc0266ed8"
  },
  {
    "url": "assets/favicon/favicon.ico",
    "revision": "6679c88c1fc7f22dc32f0b2558b3653b"
  },
  {
    "url": "assets/images/amon.png",
    "revision": "2d2700e721985014cc3f673a6cd66e1c"
  },
  {
    "url": "assets/images/amon@2x.png",
    "revision": "e580fd90ab424368278891eb23409fc7"
  },
  {
    "url": "assets/images/cb.png",
    "revision": "1c14306ebf7dbf810b12fb1e2e4093f8"
  },
  {
    "url": "assets/images/cb@2x.png",
    "revision": "6826400915d1c406a88386f1b8e7d1fc"
  },
  {
    "url": "assets/images/codeacademy.png",
    "revision": "7f85b95692d205f74d58f4345e01d0b2"
  },
  {
    "url": "assets/images/codeacademy@2x.png",
    "revision": "41e3c94db1fc39f886865834dc314019"
  },
  {
    "url": "assets/images/easypay.png",
    "revision": "f88ddb4c05dc34d76098c24f1842e7eb"
  },
  {
    "url": "assets/images/easypay@2x.png",
    "revision": "97dc61c9ea813ee2abb00f00a0373a2f"
  },
  {
    "url": "assets/images/hde.png",
    "revision": "d88ecf9e64f4b7bc4babf82d8bb97648"
  },
  {
    "url": "assets/images/hde@2x.png",
    "revision": "0d4d70f8d1bf5f2cbb8449f1d7b04223"
  },
  {
    "url": "assets/images/heptagon.png",
    "revision": "ccbbc87763a11b0561a654c6a2d6b861"
  },
  {
    "url": "assets/images/heptagon@2x.png",
    "revision": "0b9cc962f2760b99b46c07f8a8ca1216"
  },
  {
    "url": "assets/images/jamstack.png",
    "revision": "86026d8e68736e07806019864e2c9c4c"
  },
  {
    "url": "assets/images/jamstack@2x.png",
    "revision": "a20d237dbd8629df0c8143eed1d454b8"
  },
  {
    "url": "assets/images/monstarlab.png",
    "revision": "137f1b54e62b9dabaac2b23ff8eb8225"
  },
  {
    "url": "assets/images/monstarlab@2x.png",
    "revision": "a340a4d366fbae0ba40edf8da9f8b342"
  },
  {
    "url": "assets/images/ntt-docomo.png",
    "revision": "bdb5789a1be049e33e0fd8d038f1b252"
  },
  {
    "url": "assets/images/ntt-docomo@2x.png",
    "revision": "0cbd8bd575f3635590bb988841a0ff0b"
  },
  {
    "url": "assets/images/poststatus.png",
    "revision": "9f260a3946806edf6492e6df5feeb160"
  },
  {
    "url": "assets/images/poststatus@2x.png",
    "revision": "89e311ab10009a9214f6dee14c0a3b18"
  },
  {
    "url": "assets/images/section-9.png",
    "revision": "addc870de0da429f1b2c9cdd5b5f1213"
  },
  {
    "url": "assets/images/section-9@2x.png",
    "revision": "6fc7192b93b8da636d4f5efb18a49447"
  },
  {
    "url": "assets/images/serverless.png",
    "revision": "c6c66ed96fac3f2e89445d6ffd9c6681"
  },
  {
    "url": "assets/images/serverless@2x.png",
    "revision": "aa4e8b57fc0d13d2eb7f12482a418f5c"
  },
  {
    "url": "assets/images/shifter-dashboard.png",
    "revision": "22301052f1512c58e520385248914df6"
  },
  {
    "url": "assets/images/wptavern.png",
    "revision": "1d24b1aeea888b134f7ea16df7912905"
  },
  {
    "url": "assets/images/wptavern@2x.png",
    "revision": "cefb12a5243c530dd7bcd01c8e848518"
  },
  {
    "url": "assets/manifest.json",
    "revision": "7555549cfc2b7aa423fe107335c843c7"
  },
  {
    "url": "assets/shifter-512.png",
    "revision": "56c3cb5eb6bb1355b3ad4bc866190b15"
  },
  {
    "url": "favicon.ico",
    "revision": "c92b85a5b907c70211f4ec25e29a8c4a"
  },
  {
    "url": "index.html",
    "revision": "138944614065b7691866b6809eae8043"
  },
  {
    "url": "service-worker.js",
    "revision": "b7ab657c3354ae344dd2b93bdde14310"
  },
  {
    "url": "sitemap.xml",
    "revision": "281e5a319b915b53a51f8372a2c0db9d"
  },
  {
    "url": "static/css/main.439dc017.css",
    "revision": "5c2fdb611d3d715bf3341a2b4d345a2e"
  },
  {
    "url": "static/js/0.24432221.chunk.js",
    "revision": "3646d8e77540fa18b3d79934ab3f5aa5"
  },
  {
    "url": "static/js/main.6f25baa5.js",
    "revision": "f9571fae9f9f16cc9d59df56df590b41"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/index.html");

workbox.routing.registerRoute(/^https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/slick-carousel\/1\.6\.0\/slick\.min\.css/, workbox.strategies.cacheFirst({ cacheName: "slick-min", plugins: [new workbox.expiration.Plugin({"maxEntries":80,"maxAgeSeconds":86400})] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/font-awesome\/4.7.0\/css\/font-awesome.min.css/, workbox.strategies.cacheFirst({ cacheName: "font-awesome", plugins: [new workbox.expiration.Plugin({"maxEntries":80,"maxAgeSeconds":86400})] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/slick-carousel\/1.6.0\/slick-theme.min.css/, workbox.strategies.cacheFirst({ cacheName: "slick-theme", plugins: [new workbox.expiration.Plugin({"maxEntries":80,"maxAgeSeconds":86400})] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/balance-text\/3.2.0\/balancetext.min.js/, workbox.strategies.cacheFirst({ cacheName: "balancetext", plugins: [new workbox.expiration.Plugin({"maxEntries":80,"maxAgeSeconds":86400})] }), 'GET');

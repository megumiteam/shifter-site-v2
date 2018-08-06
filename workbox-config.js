module.exports = {
  "globDirectory": "build/",
  "globPatterns": [
    "**/*.{json,png,ico,html,js,xml,css}"
  ],
  "swDest": "public/sw.js",
  "runtimeCaching": [
    {
      urlPattern: /^https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/slick-carousel\/1\.6\.0\/slick\.min\.css/,
      handler: 'cacheFirst',
      options: {
        cacheName: 'slick-min',
        expiration: {
          maxEntries: 80,
          maxAgeSeconds: 60 * 60 * 24
        }
      }
    },
    {
      urlPattern: /^https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/font-awesome\/4.7.0\/css\/font-awesome.min.css/,
      handler: 'cacheFirst',
      options: {
        cacheName: 'font-awesome',
        expiration: {
          maxEntries: 80,
          maxAgeSeconds: 60 * 60 * 24
        }
      }
    },
    {
      urlPattern: /^https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/slick-carousel\/1.6.0\/slick-theme.min.css/,
      handler: 'cacheFirst',
      options: {
        cacheName: 'slick-theme',
        expiration: {
          maxEntries: 80,
          maxAgeSeconds: 60 * 60 * 24
        }
      }
    },
    {
      urlPattern: /^https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/balance-text\/3.2.0\/balancetext.min.js/,
      handler: 'cacheFirst',
      options: {
        cacheName: 'balancetext',
        expiration: {
          maxEntries: 80,
          maxAgeSeconds: 60 * 60 * 24
        }
      }
    }
  ]
};
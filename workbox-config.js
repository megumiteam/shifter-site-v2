module.exports = {
  "globDirectory": "build/",
  "globPatterns": [
    "**/*.{json,png,ico,html,js,xml,css}"
  ],
  "swDest": "build/sw.js",
  "navigateFallback": '/index.html',
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
    },{
      urlPattern: /^https:\/\/api\.digitalcube\.jp\/wp-content\/uploads\/.*\.(jpeg|jpg|png)/,
      handler: 'cacheFirst',
      options: {
        cacheName: 'wp-images',
        expiration: {
          maxEntries: 80,
          maxAgeSeconds: 60 * 60 * 24
        }
      }
    },
    {
      urlPattern: /^https:\/\/api\.digitalcube\.jp\/wp-json\/wp/,
      handler: 'staleWhileRevalidate',
      options: {
        cacheName: 'wp-api'
      }
    }
  ]
};
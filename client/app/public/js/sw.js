var CACHE_NAME = 'static-v1';

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll([
        '/views/cadastro.html',
        '/views/convocar.html',
        '/views/createMatch.html',
        '/views/dashboard.html',
        '/views/detalhesConvite.html',
        '/views/detalhesPartida.html',
        '/views/error.html',
        '/views/index.html',
        '/views/login.html',
        '/views/menu.html',
        '/views/meusConvites.html',
        '/views/minhasPartidas.html',
        '/value/config.js',
        '/services/mailAPI.js',
        '/services/matchAPI.js',
        '/services/sportsAPI.js',
        '/services/userAPI.js',
        '/routes/cadastro.router.js',
        '/routes/createMatch.router.js',
        '/routes/dashboard.router.js',
        '/routes/detalhesConvite.router.js',
        '/routes/detalhesPartida.router.js',
        '/routes/login.router.js',
        '/routes/meusConvites.router.js',
        '/routes/minhasPartidas.router.js',
        '/routes/routeConfig.router.js',
        '/lib/angular-route.min.js',
        '/lib/angular-touch.min.js',
        '/lib/angular.js',
        '/lib/bootstrap.css',
        '/lib/bootstrap.js',
        '/lib/jquery.min.js',
        '/lib/mdb.css',
        '/lib/mdb.js',
        '/lib/mdb.min.css',
        '/lib/mdb.min.js',
        '/lib/ngStorage.min.js',
        '/lib/popper.min.css',
        '/js/app.js',
        '/interceptors/error.interceptor.js',
        '/interceptors/interceptors.config.js',
        '/interceptors/loading.interceptor.js',
        '/font/roboto/Roboto-Bold.eot',
        '/font/roboto/Roboto-Bold.ttf',
        '/font/roboto/Roboto-Bold.woff',
        '/font/roboto/Roboto-Bold.woff2',
        '/font/roboto/Roboto-Light.eot',
        '/font/roboto/Roboto-Light.ttf',
        '/font/roboto/Roboto-Light.woff',
        '/font/roboto/Roboto-Light.woff2',
        '/font/roboto/Roboto-Medium.eot',
        '/font/roboto/Roboto-Medium.ttf',
        '/font/roboto/Roboto-Medium.woff',
        '/font/roboto/Roboto-Medium.woff2',
        '/font/roboto/Roboto-Regular.eot',
        '/font/roboto/Roboto-Regular.ttf',
        '/font/roboto/Roboto-Regular.woff',
        '/font/roboto/Roboto-Regular.woff2',
        '/font/roboto/Roboto-Thin.eot',
        '/font/roboto/Roboto-Thin.ttf',
        '/font/roboto/Roboto-Thin.woff',
        '/font/roboto/Roboto-Thin.woff2',
        '/directives/menu.directive.js',
        '/css/css_flaticon.scss',
        '/css/flaticon.css',
        '/css/Flaticon.eot',
        '/css/Flaticon.svg',
        '/css/Flaticon.ttf',
        '/css/Flaticon.woff',
        '/css/index.css',
        '/css/menu.css',
        '/css/page.css',
        '/css/switch.css',
        '/controllers/cadastro.controller.js',
        '/controllers/createMatch.controller.js',
        '/controllers/dashboard.controller.js',
        '/controllers/detalhesConvites.controller.js',
        '/controllers/detalhesPartida.controller.js',
        '/controllers/login.controller.js',
        '/controllers/menu.controller.js',
        '/controllers/meusConvites.controller.js',
        '/controllers/minhasPartidas.controller.js',
      ]);
    })
  )
});

self.addEventListener('activate', function activator(event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys
        .filter(function (key) {
          return key.indexOf(CACHE_NAME) !== 0;
        })
        .map(function (key) {
          return caches.delete(key);
        })
      );
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (cachedResponse) {
      return cachedResponse || fetch(event.request);
    })
  );
});

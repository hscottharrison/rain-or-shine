angular.module('rainOrShine', ['ui.router', 'ngMaterial'])
  .config(function($stateProvider, $urlRouterProvider) {
    /* Set home route */
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/home/:city/:state',
        templateUrl: '../views/home-tmpl.html',
        controller: 'homeCtrl'
        // resolve: {
        //   weather: function(weatherService, $stateParams) {
        //     weatherService.getWeather($stateParams.city, $stateParams.state).then(function(response) {
        //       return response;
        //       console.log(response)
        //     });
        //   }
        // }
      })
      .state('splash', {
        url: '/',
        templateUrl: '../views/splash.html',
        controller: function($scope, $state) {
          console.log('splash');

        }
      });
  });

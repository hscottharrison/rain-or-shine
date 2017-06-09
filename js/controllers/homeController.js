angular.module('rainOrShine').controller('homeCtrl', function($scope, weatherService, $stateParams){

weatherService.getWeather($stateParams.state, $stateParams.city)
    .then(function(response){
      var results = response;
      $scope.location = results.display_location.full;
      $scope.temp = results.temp_f;
      $scope.weather = results.weather;
      $scope.wind = results.wind_mph;
      $scope.observation_time = results.observation_time;
      $scope.feelslike = results.feelslike_string;
      $scope.icon = results.icon_url;
    })
    $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
    'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
    'WY').split(' ').map(function(state) {
     return {abbrev: state};
    });
weatherService.getHourly($stateParams.state, $stateParams.city)
.then(function(response){
  $scope.hourlys = response;
})

weatherService.getWeekly($stateParams.state, $stateParams.city)
.then(function(response){

  $scope.weeklys = response;
})
$scope.radar = 'http://api.wunderground.com/api/7bd6e5a7f2af93d2/animatedradar/animatedsatellite/q/' + $stateParams.state + '/' + $stateParams.city + '.gif?num=6&delay=50&interval=30'
console.log($scope.radar);
// weatherService.getRadar()
// .then(function(response){
//   console.log(response)
//   $scope.radar = response;
// })

})

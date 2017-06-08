angular.module('rainOrShine').controller('homeCtrl', function($scope, weatherService){

  $scope.getWeather = function(city, state){
    weatherService.getWeather(city, state)
    .then(function(response){
      console.log(response.data.forecast);
    })
  };



})

angular.module('rainOrShine').service('weatherService', function($http){

  this.getWeather = function(state, city){
    return $http.get('http://api.wunderground.com/api/7bd6e5a7f2af93d2/forecast/q/' + state + '/' + city + '.json')
    .then(function(response){
      return response.data.forecast;
    })
  }
})

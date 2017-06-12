angular.module('rainOrShine').directive('compareInputDir', function(){
  return {
    templateUrl: '../../views/compareinputdir.html',
    scope: {
      getWeekly: '&',
      getWeather: '&',
      displayWeekly: '&',
      displayWeather: '&',
      searching: '=',
      weeklys: '=',
      weather: '=',
    },
    controller: function($scope) {
      $scope.submit = function() {
        $scope.searching = true;
        $scope.getWeather({state: $scope.state, city: $scope.city}).then(function(response) {
          $scope.displayWeather({response: response, scope: $scope.weather})
          console.log($scope.weather)
        })
        $scope.getWeekly({state: $scope.state, city: $scope.city}).then(function(response) {
          $scope.displayWeekly({response: response, scope: $scope.weeklys})
          console.log($scope.weeklys)
        })
      }
    }
  }






})

angular.module('rainOrShine').directive('currentConditionsDir', function(){
  return{
    templateUrl: '../../views/currentconditions.html',
    scope: {
      weather: '='
    },
    controller: function($scope) {
      console.log("weather", $scope.weather)
      $scope.$watchCollection('weather', function(newVal, oldVal) {
        console.log("Changed Value: ", newVal)
        $scope.weather = newVal
      })
    }
  }
})

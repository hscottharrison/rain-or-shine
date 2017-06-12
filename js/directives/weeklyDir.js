angular.module('rainOrShine').directive('weeklyDir', function(){
  return{
    templateUrl: '../../views/weekly-dir.html',
    scope: {
      weeklys: '='
    },
    controller: 'homeCtrl'
  }
})

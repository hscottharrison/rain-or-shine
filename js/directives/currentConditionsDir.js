angular.module('rainOrShine').directive('currentConditionsDir', function(){
  return{
    templateUrl: '../../views/currentconditions.html',
    controller: 'compareDirCtrl'
  }
})

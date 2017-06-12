// angular.module('rainOrShine').controller('compareDirCtrl', function($scope, weatherService){
//   $scope.getCompare = function(state,city){
//     weatherService.getWeather(state, city)
//       .then(function(response){
//         var results = response;
//         var weather = results.weather;
//         console.log(weather)
//         $scope.location = results.display_location.full;
//         $scope.temp = results.temp_f;
//         $scope.weather = results.weather;
//         $scope.wind = results.wind_mph;
//         $scope.observation_time = results.observation_time;
//         $scope.feelslike = results.feelslike_string;
//         $scope.icon = results.icon_url;
//         $scope.observation_location = results.observation_location.full;
//         $scope.latitude = results.observation_location.latitude;
//         $scope.longitude = results.observation_location.longitude;
//         $scope.elevation = results.observation_location.elevation;
//         $scope.humidity = results.relative_humidity;
//         $scope.wind_gust = results.wind_gust_mph;
//         if(weather == 'Clear' || weather == 'Sunny'){
//           $scope.icon = '../../images/sun.png';
//         }
//         else if(weather == 'Clear' || weather == 'Sunny' && hours() > 21){
//           $scope.icon = '../../images/moon.png';
//         }
//         else if(weather == 'Scattered Clouds' || weather == 'Partly Sunny' || weather == 'Partly Cloudy' || weather == 'Mostly Sunny' || weather == 'Mostly Cloudy' && hours() < 21){
//           $scope.icon = '../../images/sun_cloud.png';
//         }
//         else if(weather == 'Scattered Clouds' || weather == 'Partly Sunny' || weather == 'Partly Cloudy' || weather == 'Mostly Sunny' || weather == 'Mostly Cloudy' && hours() > 21){
//           $scope.icon = '../../images/moon_cloud.png';
//         }
//         else if(weather == 'Cloudy' || weather == 'Overcast'){
//           $scope.icon = '../../images/cloud.png';
//         }
//         else if(weather == 'Flurries' || weather == 'Freezing Rain' || weather == 'Sleet' || weather == 'Snow'){
//           $scope.icon = '../../images/snow.png';
//         }
//         else if(weather == 'Rain'){
//           $scope.icon = '../../images/rain.png';
//         }
//         else if(weather == 'Thunderstorms' || weather == 'Thunderstorm' || weather == 'Chance of a Thunderstorm'){
//           $scope.icon = '../../images/thunderstorm.png';
//         }
//       })
//   }
//   $scope.getWkCompare = function(state, city){
//     weatherService.getWeekly(state, city)
//       .then(function(response){
//         for(var i = 0; i < response.length; i++){
//           if(response[i].condition == 'Clear' || response[i].condition == 'Sunny'){
//             response[i].icon = '../../images/sun.png';
//           }
//           else if(response[i].condition == 'Scattered Clouds' || response[i].condition == 'Partly Sunny' || response[i].condition == 'Partly Cloudy' || response[i].condition == 'Mostly Sunny' || response[i].condition == 'Mostly Cloudy'){
//             response[i].icon = '../../images/sun_cloud.png';
//           }
//           else if(response[i].condition == 'Cloudy' || response[i].condition == 'Overcast'){
//            response[i].icon = '../../images/cloud.png';
//           }
//           else if(response[i].condition == 'Flurries' || response[i].condition == 'Freezing Rain' || response[i].condition == 'Sleet' || response[i].condition == 'Snow'){
//             response[i].icon = '../../images/snow.png';
//           }
//           else if(response[i].condition == 'Rain'){
//             response[i].icon = '../../images/rain.png';
//           }
//           else if(response[i].condition == 'Thunderstorms' || response[i].condition == 'Thunderstorm' || response[i].condition == 'Chance of a Thunderstorm'){
//             response[i].icon = '../../images/thunderstorm.png';
//           }
//         }
//         $scope.weeklys = response
//       })
//     }
//
//
//
//   $scope.getCompare = function(state, city){
//     console.log(state, city)
//   }
//   $scope.getWkCompare = function(state, city){
//     console.log(state, city)
//   }
// })//end of controller

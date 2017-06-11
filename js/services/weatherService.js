angular.module('rainOrShine').service('weatherService', function($http){

  this.getWeather = function(state, city){
    return $http.get('http://api.wunderground.com/api/7bd6e5a7f2af93d2/conditions/q/' + state + '/' + city + '.json')
    .then(function(response){

      return response.data.current_observation;
    })
  }

  this.getHourly = function(state, city){
    return $http.get('http://api.wunderground.com/api/7bd6e5a7f2af93d2/hourly/q/' + state + '/' + city + '.json')
    .then(function(response){

      var results = response.data.hourly_forecast
      console.log(results);
      var hourlyArr = [];
      for(var i = 0; i <= 12; i++){
        var hourlyObj = {
          time: results[i].FCTTIME.civil,
          hour: results[i].FCTTIME.hour,
          condition: results[i].condition,
          icon: results[i].icon_url,
          temp: results[i].temp.english,
        }
        hourlyArr.push(hourlyObj)
      }
      return hourlyArr;
    })
  }
  this.getWeekly = function(state, city){
    return $http.get('http://api.wunderground.com/api/7bd6e5a7f2af93d2/forecast10day/q/' + state + '/' + city + '.json')
    .then(function(response){
      var wkResults = response.data.forecast.simpleforecast.forecastday;
      console.log(wkResults)
      var wkArr = [];
      for(var i = 0; i < wkResults.length; i++){
        var wkObj = {
          weekday: wkResults[i].date.weekday_short,
          month: wkResults[i].date.monthname_short,
          day: wkResults[i].date.day,
          high: wkResults[i].high.fahrenheit,
          low: wkResults[i].low.fahrenheit,
          icon: wkResults[i].icon_url,
          condition: wkResults[i].conditions
        }
        wkArr.push(wkObj)
      }
      return wkArr;
    })
  }
  this.getRadar = function(state, city){
    return $http.get('')
    .then(function(response){
      return response;
    })
  }


})

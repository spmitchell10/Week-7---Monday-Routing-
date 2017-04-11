(function() {
    'use strict';

    angular
        .module('routing')
        .factory('API', function($http) {



            return {
                getHeros: () => {
                    return $http({
                        type: "GET",
                        url: "https://gateway.marvel.com:443/v1/public/characters?limit=16&apikey=514aba9de2d628c8f5b8e097bfee3a26",

                    })
                },
                getSingleHeros: (id) => {
                    return $http({
                        type: "GET",
                        url: `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=514aba9de2d628c8f5b8e097bfee3a26`,

                    })
                },
                getThreeHeros: () => {
                    return $http({
                        type: "GET",
                        url: "https://gateway.marvel.com:443/v1/public/characters?limit=4&apikey=514aba9de2d628c8f5b8e097bfee3a26",

                    })
                },
                getTheWeather: (city) => {
                    return $http({
                        type: "GET",
                        url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=7cf16558d759d14815306832bd7341e2&units=imperial`,

                    })
                },
                getVillains: () => {
                    return $http({
                        type: "GET",
                        url: "https://gateway.marvel.com:443/v1/public/characters?limit=16&offset=16&apikey=514aba9de2d628c8f5b8e097bfee3a26",

                    })
                }
            }
        });

})();

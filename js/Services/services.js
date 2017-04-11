(function() {
    'use strict';

    angular
        .module('routing')
        .factory('API', function($http) {



            return {
                getHeros: () => {
                    return $http({
                        type: "GET",
                        url: "https://gateway.marvel.com:443/v1/public/characters?limit=8&apikey=514aba9de2d628c8f5b8e097bfee3a26",

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
                getVillains: () => {
                    return $http({
                        type: "GET",
                        url: "https://gateway.marvel.com:443/v1/public/characters?limit=8&offset=8&apikey=514aba9de2d628c8f5b8e097bfee3a26",

                    })
                }
            }
        });

})();

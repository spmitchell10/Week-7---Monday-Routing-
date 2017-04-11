(function() {
    'use strict';

    angular
        .module('routing')
		.directive('weather', function (API) {

		  return {
		    restrict: 'E', // Restrict to Element only
		    templateUrl: '../partials/weather.html',
    		 link: function ( vm, element, attrs ){

		      	let weather = API.getTheWeather(attrs.city);

		    	weather.then(res=>{
		    		console.log(res);
		    		vm.weather = res.data;
		    	})
		    },

		  };
		});
})();
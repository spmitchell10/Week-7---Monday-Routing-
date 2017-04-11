(function() {
    'use strict';

    angular
        .module('routing')
        .controller('MainControllers', function(API) {
        	const vm = this;
            const heros = API.getThreeHeros();

            heros.then(res => {
            	console.log(res);
                vm.heros = res.data.data.results;
            })
        });
     
})();
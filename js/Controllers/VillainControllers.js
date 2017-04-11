(function() {
    'use strict';

    angular
        .module('routing')
        .controller('VillainControllers', function(API) {
            const vm = this;

            const heros = API.getVillains();

            heros.then(res => {
            	console.log(res);
                vm.heros = res.data.data.results;
            })

        });

})();
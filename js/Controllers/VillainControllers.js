(function() {
    'use strict';

    angular
        .module('routing')
        .controller('VillainControllers', function(API) {
            const vm = this;

            const villains = API.getVillains();

            villains.then(res => {
            	console.log(res);
                vm.villains = res.data.data.results;
            })

        });

})();
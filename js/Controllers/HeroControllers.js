(function() {
    'use strict';

    angular
        .module('routing')
        .controller('HeroControllers', function(API) {
            const vm = this;

            const heros = API.getHeros();

            heros.then(res => {
            	console.log(res);
                vm.heros = res.data.data.results;
            })

        });

})();

(function() {
    'use strict';

    angular
        .module('routing')
        .controller('singleHeroController', function(API,$stateParams) {

        	const vm = this;

            const heros = API.getSingleHeros();
            
            heros.then(res=>{
                vm.heros = res.data.data.results;
            })

        });
     
})();
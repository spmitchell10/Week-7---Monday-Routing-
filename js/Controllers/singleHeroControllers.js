(function() {
    'use strict';

    angular
        .module('routing')
        .controller('singleHeroController', function(API,$stateParams) {

        	const vm = this;
            let id = $stateParams.id;

            const heros = API.getSingleHeros(id);
            
            heros.then(res=>{
                vm.heros = res.data.data.results[0];
            })

        });
     
})();
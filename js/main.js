(function() {
    'use strict';

    angular
        .module('routing', ['ui.router'])
        .config(function($stateProvider, $urlRouterProvider, $locationProvider) {

            //   	$locationProvider.html5Mode({
            //   enabled: true,
            //   requireBase: false
            // });

            $stateProvider
                .state('home', {
                    url: '/',
                    views: {
                        'content': {
                            templateUrl: '../partials/home.html',
                            controller: 'MainControllers',
                            controllerAs: 'vm'
                        },

                    }
                })
                .state('heros', {
                    url: '/heros',
                    views: {
                        'content': {
                            templateUrl: '../partials/heros.html',
                            controller: 'HeroControllers',
                            controllerAs: 'vm'
                        },

                    }
                })
                .state('villains', {
                    url: '/villains',
                    views: {
                        'content': {
                            templateUrl: '../partials/heros.html',
                            controller: 'VillainControllers',
                            controllerAs: 'vm'
                        },

                    }
                })
                .state('singleHeros', {
                    url: '/heros/:id',
                    views: {
                        'content': {
                            templateUrl: '../partials/singleHeros.html',
                            controller: 'singleHeroController',
                            controllerAs: 'vm'
                        },

                    }
                })
        })
})();

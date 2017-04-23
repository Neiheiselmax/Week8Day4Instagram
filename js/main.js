(function() {
    'use strict';

    angular
    .module('routing', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider,$locationProvider){

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
            controller:'TableController',
            controllerAs:'vm'
            }
		   }
	    })
	    .state('addPhoto', {
	      url: '/AddPhoto',
	      views: {
		      'content': {
		        templateUrl: '../partials/addPhoto.html',
            controller:'TableController',
            controllerAs:'vm'
		      }
		   }
	    })
    });

})();

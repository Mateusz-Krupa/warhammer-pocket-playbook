'use strict';
var angularModule = angular.module('WPP', [])
angularModule.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/characterList', {
            templateUrl: 'views/characterList.html',
            controller: 'CharacterListController',
        })
        .when('/dice', {
            templateUrl: 'views/dice.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});

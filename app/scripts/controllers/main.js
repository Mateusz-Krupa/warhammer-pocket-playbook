'use strict';

var angularModule = angular.module('WPP');

angularModule.controller('MainCtrl',function ($scope) {
    $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];
}).controller("CharacterListController", function ($scope, characterList) {
        $scope.items = [];

        init();
        function init() {
            $scope.items = characterList.query();
        }
    });


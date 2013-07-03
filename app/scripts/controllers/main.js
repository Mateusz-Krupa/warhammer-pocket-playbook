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
    $scope.deleteBtn = 'btn-delete-disabled';
    $scope.removeCharacter = function (index, id) {
        if(!$scope.deleteBtn){
            $scope.items.splice(index, 1);
            //TODO removeFromDatabase by id
        }
    };

    $scope.activeDelete = function(){
        console.log($scope.deleteBtn);
        if (!!$scope.deleteBtn) {
            $scope.deleteBtn = '';
        } else {
            $scope.deleteBtn = 'btn-delete-disabled';
        }
    };

    init();
    function init() {
      $scope.items = characterList.query();
    };

}).controller("CharacterController", function ($scope,characterData){
    $scope.profile = {};

    console.log(characterData);
    init();
    function init(){
        $scope.profile = characterData.query();
        console.log($scope.profile)
    }

})

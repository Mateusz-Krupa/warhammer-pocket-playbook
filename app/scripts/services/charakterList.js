'use strict';

var angularModule = angular.module('WPP');

angularModule.factory('characterList', function () {
    var items = {};
    items.query = function () {
        return [
            {'id': '1231', 'name': 'Rima', "profession": 'Knight', "race": "elf", "data": "2012-07-04"},
            {'id': '423', 'name': 'Delek', "profession": '1', "race": "elf", "data": "2012-07-04"},
            {'id': '323', 'name': 'Sujeczka', "profession": 'Knight', "race": "elf", "data": "2012-07-04"},
            {'id': '223', 'name': 'Kominek', "profession": 'Knight3', "race": "elf", "data": "2012-07-04"},
            {'id': '133', 'name': 'Zabijaka', "profession": 'Knight', "race": "elf", "data": "2012-07-04 "}
        ];
    };
    return items;
});


angularModule.factory("characterData", function () {
    var items = {};
    items.query = function () {
        return [
            {'name': 'Rima', "profession": 'Knight',"age":"123", "race": "elf", "path": "Mage"}
        ];
    };
    return items;
});
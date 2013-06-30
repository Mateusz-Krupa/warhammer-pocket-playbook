'use strict';

describe('Controller: CharacterListController', function () {

    // load the controller's module
    beforeEach(module('WPP'));

    var CharacterListController,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        CharacterListController = $controller('CharacterListController', {
            $scope: scope
        });
    }));

    it('should attach items to the scope', function () {
        expect(scope.items).toBeDefined();
        expect(scope.items[0].name).toBe("Rima");
        expect(scope.items.length).toBe(5);
    });

});

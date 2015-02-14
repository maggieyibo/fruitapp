describe('Fruit Controller Spec', function() {
	beforeEach(module('fruitApp'));

	var mockFruits = {
    fruitArray: ['apple','banana'],
    get: function() {
      return this.fruitArray;
    },
    put: function(fruit) {
      this.fruitArray.push(fruit);
         }
  };

	it('has a test string assigned to scope', inject(function($rootScope, $controller) {
		var scope = $rootScope.$new();
		var ctrl = $controller('FruitController', {$scope: scope});
		expect(scope.test).toBe("test");

	})
	);

	it('returns an array of fruit with length 3', 
		inject(function($rootScope, $controller){
			var scope = $rootScope.$new();
			var ctrl = $controller('FruitController', {$scope: scope, FruitFactory:mockFruits});
			expect(scope.fruits.length).toBe(2);
		}))

});
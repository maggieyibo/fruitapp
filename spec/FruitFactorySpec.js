describe('Fruit Controller Spec', function() {
	beforeEach(function() {
		module('fruitApp');

	inject(function(FruitFactory){
      factory = FruitFactory;
    });

    fruits = {
      fruit1: 'apple',
      fruit2: 'banana',
      fruit3: 'pear'
      };

    SpyOn(localStorage, 'setItem').andCallFake(function(key, value) {
      	fruits[key] = value;
      });

    SpyOn(localStorage, 'getItem').andCallFake(function(key) {
      	return fruits[key];
      });

    SpyOn
    });
});
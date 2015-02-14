var app = angular
  .module('fruitApp',[]);

app.controller('FruitController', function($scope) {
	$scope.test = "test"
});

app.factory('FruitFactory', function(){
	return {
		put: function(fruit) {
			localStorage.setItem(('fruit' + Object.keys(localStorage).length), fruit);
		}
		 get: function() {
             console.log(localStorage);
             var fruitArray = [];
             var fruitKeys = Object.keys(localStorage);
             for (var i =0; i < fruitKeys.length; i++) {
               fruitArray.push(localStorage.getItem(fruitKeys[i]));
             }
            return fruitArray;
           }
	}
});

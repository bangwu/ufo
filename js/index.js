/**
 * Created by twer on 15/1/17.
 */
var test=angular.module("test",['ngRoute']);
test.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/list',{
            templateUrl:'partial/foods-list.html',
            controller: 'FoodListController'}).
        when('/list/:foodId',{
            templateUrl:'partial/food-detail.html',
            controller: 'FoodDetailController'}).
		when('/pay',{
			templateUrl:'partial/pay.html',
			controller: 'PayFoodsController'}).
        otherwise({redirectTo: '/list'});
}]);

test.controller("AreaController",['$scope','$http',function($scope,$http){
	$http.get('data/areas.json').success(function(data){
		$scope.areas=data;
	});
}]);

test.controller("FoodTypeController",['$scope','$http',function($scope,$http){
	$http.get('data/food_types.json').success(function(data){
		$scope.food_types=data;
	});
}]);

test.controller("PriceScopeController",['$scope','$http',function($scope,$http){
	$http.get('data/price_scope.json').success(function(data){
		$scope.price_scopes=data;
	});
}]);

test.controller("FoodListController",['$scope','$http',function($scope,$http){
    $http.get('data/foods.json').success(function(data){
        $scope.foods=data;
    });
}]);


var pay_foods=[];

test.controller('FoodDetailController',['$scope','$routeParams','$http',function($scope,$routeParams,$http){
    $http.get('data/foods.json').success(function(data){
        $scope.foods=data;
        $scope.food=$scope.foods[parseInt($routeParams.foodId)];
    });
	
    $scope.add_food=function(id){
		pay_foods.push($scope.foods[parseInt($routeParams.foodId)]);
    }
	redirectTo: '/list';
}]);

test.controller('PayFoodsController',['$scope',function($scope){
	$scope.foods=pay_foods;
}]);

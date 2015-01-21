/**
 * Created by twer on 15/1/17.
 */
var test=angular.module("test",['ngRoute']);
test.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/list',{
            templateUrl:'partial/foods-list.html',
            controller: FoodListController}).
        when('/list/:foodId',{
            templateUrl:'partial/food-detail.html',
            controller: FoodDetailController}).
		when('/pay',{
			templateUrl:'partial/pay.html',
			controller: PayFoodsController}).
        otherwise({redirectTo: '/list'});
}]);

AreaController= function($scope,$http){
	$http.get('/js/areas.json').success(function(data){
		$scope.areas=data;
	});
}

FoodListController = function($scope,$http){
    $http.get('js/foods.json').success(function(data){
        $scope.foods=data;
    });
};
var pay_foods=[];

FoodDetailController = function($scope,$routeParams,$http){
    $http.get('js/foods.json').success(function(data){
        $scope.foods=data;
        $scope.food=$scope.foods[parseInt($routeParams.foodId)];
    });
	
    $scope.add_food=function(id){
		pay_foods.push($scope.foods[parseInt($routeParams.foodId)]);
    }
	redirectTo: '/list';
}

PayFoodsController = function($scope){
	$scope.foods=pay_foods;
}

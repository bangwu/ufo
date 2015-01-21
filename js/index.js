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
        otherwise({redirectTo: '/list'});
}]);

FoodListController = function($scope,$http){
    $http.get('js/pay.js').success(function(data){
        $scope.foods=data;
    });

    $scope.add_food=function(id){
        alert(id);
    }

};
FoodDetailController = function($scope,$routeParams,$http){
    $http.get('js/pay.js').success(function(data){
        $scope.foods=data;
        $scope.food=$scope.foods[parseInt($routeParams.foodId)];
    });
}

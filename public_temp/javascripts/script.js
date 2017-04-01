va module = angular.module('app',[])

var ctrl1=mymodule.controller('myctrl',function($scope){
	$scope.add = function(){
		$http.get('htpp').then(function(response) {
			$scope.data = 
		});
	};	
});

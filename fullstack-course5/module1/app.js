(function () {
	'use strict';
	angular.module('LunchCheck' , [])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope) {
		$scope.message = "";
		$scope.name="";
		$scope.selectMessage=function() {

			if($scope.name==""){
				$scope.message = "Please enter data first";
				return;
			}
			
			var num=countItems($scope.name);
			if(num<=3)
				$scope.message="Enjoy!";
			else
				$scope.message="Too much!";
		};

		function countItems(string) {
			var total = 0;
			var words = string.split(',');
    		total=words.length;
    		return total;
		};
	};
})();
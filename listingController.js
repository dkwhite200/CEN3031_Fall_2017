angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
	function($scope, Listings) {
		$scope.listings = Listings;
		$scope.detailedInfo = undefined;

		/* 
		  Implement these functions in the controller to make your application function 
		  as described in the assignment spec. 
		 */
		$scope.addListing = function() {
			$scope.listings.push({
				
				"code": $scope.addCode, 
				"name": $scope.addName, 
				"coordinates": {
					"latitude": $scope.addLat, 
					"longitude": $scope.addLong
				}, 
				"address": $scope.addAdd
			});
		};
		$scope.deleteListing = function(index) {
			var num = $scope.listings.indexOf(index);
			$scope.listings.splice(num, 1);
		};
		$scope.showDetails = function(index) {
			$scope.coordinates = index.coordinates;
			$scope.address = index.address;
		};
	  }  
]);
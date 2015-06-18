angular.module('wolkidee.controllers', []).controller('HomeCtrl', function($scope, $meteor){
	$scope.title = 'test idee';


  		$scope.quotes = $meteor.collection(Quotes);
		console.log($scope.quotes);

  	    $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
		    $('.grid').isotope({
	  	    	percentPosition: true,
	    		itemSelector: '.grid-item',
			    masonry: {
			    	columnWidth: 0
			    }
  			});
		});

});
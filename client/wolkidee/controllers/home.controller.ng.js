angular.module('wolkidee.controllers', []).controller('HomeCtrl', function($scope){
	$scope.title = 'test idee';

  	    $('.grid').isotope({
  	    	percentPosition: true,
    		itemSelector: '.grid-item',
		    masonry: {
		    	columnWidth: 0
		    }
  		});

  		$scope.quotes = $meteor.collection(Quotes);
		console.log($scope.quotes);
});
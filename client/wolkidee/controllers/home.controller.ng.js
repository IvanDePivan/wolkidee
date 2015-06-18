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

  			$(document).ready(function(){
  				$('.grid').css('margin', 'auto');
			    $scope.setContainerWidth();
			});

			  $(window).resize(function(){
			    $scope.setContainerWidth();
			});
		});

		$scope.setContainerWidth = function(){
			$('.grid').css('width', 'auto'); //reset
			var windowWidth = $(document).width();
			var blockWidth = $('.quoteCard').outerWidth(true);
			console.log("Blockwidth: " + blockWidth)
			var maxBoxPerRow = Math.floor(windowWidth / blockWidth);
			var newWidth = Math.floor(maxBoxPerRow * blockWidth);
			console.log(newWidth)
			$('.grid').width(newWidth);
			$('.grid').css('marg', 'auto'); //reset
		}

});
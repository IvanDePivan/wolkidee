angular.module('wolkidee.controllers', []).controller('HomeCtrl', function($scope, $meteor, $filter){
	$scope.title = 'test idee';

		var iso;
  		$scope.quotes = $meteor.collection(Quotes);
		console.log($scope.quotes);
  		var once = true;
  	    $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
  	    	if(once){
	  			once = false;
	  			var elem = document.querySelector('.grid');
				iso = new Isotope( elem, {
				  // options
				  itemSelector: '.grid-item',
				  layoutMode: 'masonry'
				});

  	    	} else {
  	    			console.log(ngRepeatFinishedEvent);
	  	    		console.log(iso);
	  	    		var id;
	  	    		if($scope.quotes[$scope.quotes.length-1]._id._str){
	  	    			id = $scope.quotes[$scope.quotes.length-1]._id._str;
	  	    		} else {
	  	    			id = $scope.quotes[$scope.quotes.length-1]._id;
	  	    		}
	  	    		iso.arrange();
  	    	}

  			$(document).ready(function(){
  				$('.grid').css('margin', 'auto');
			    $scope.setContainerWidth();
			});

			  $(window).resize(function(){
			    $scope.setContainerWidth();
			});
		});

		$(window).load(function() {
			iso.arrange();
		});

		$scope.setContainerWidth = function(){
			$('.grid').css('width', 'auto'); //reset
			var windowWidth = $(document).width();
			var blockWidth = $('.quoteCard').outerWidth(true);
			var maxBoxPerRow = Math.floor(windowWidth / blockWidth);
			var newWidth = Math.floor(maxBoxPerRow * blockWidth);
			$('.grid').width(newWidth);
			$('.grid').css('marg', 'auto'); //reset
		};

});
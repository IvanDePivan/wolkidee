angular.module('wolkidee.controllers').controller('HomeCtrl', function($scope, $meteor, $state, $filter, $stateParams, $timeout){
	$scope.title = 'test idee';
	if($stateParams.academie){
		$scope.academie = { name: $stateParams.academie };
  		$scope.quotes = $meteor.collection(Quotes);
	} else {
		$state.go('home.academie');
	}
	
  	var once = true;
    $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
    	// console.log('ngRepeatFinished');
  	    if(once){
	  		once = false;
	  		var elem = document.querySelector('.grid');
			$scope.iso = new Isotope( elem, {
				itemSelector: '.grid-item',
				layoutMode: 'masonry'
			});
			$timeout(function(){
				$scope.setContainerWidth();
			}, 300);
  	    }  else {
  	    	$timeout(function(){
  	    		// console.log('relayout');
				$scope.iso.arrange();
			}, 1000);
  	    }
		$(window).resize(function(){
			$scope.setContainerWidth();
		});
		$(window).load(function(){
			$scope.setContainerWidth();
		});
	});

	$scope.setContainerWidth = function(){
		$scope.iso.arrange();
		$('.grid').css('width', 'auto'); //reset
		var windowWidth = $(document).width();
		var blockWidth = $('.quoteCard').outerWidth(true);
		var maxBoxPerRow = Math.floor(windowWidth / blockWidth);
		var newWidth = Math.floor(maxBoxPerRow * blockWidth);
		$('.grid').width(newWidth);
	};

	$scope.back = function(){
		$state.go('home.academie');
	};
});
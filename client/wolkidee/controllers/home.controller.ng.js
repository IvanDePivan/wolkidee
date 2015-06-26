angular.module('wolkidee.controllers').controller('HomeCtrl', function($scope, $meteor, $state, $filter, $stateParams, $timeout){
	$scope.title = 'test idee';
	if($stateParams["academie"]){
		$scope.academie = { name: $stateParams["academie"] }
		$scope.iso;
  		$scope.quotes = $filter('filter')($meteor.collection(Quotes), {'state': 'accepted', 'academie': $scope.academie.name});
	} else {
		$state.go('home.academie');
	}
	
  	var once = true;
    $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
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
  	    } 
		$(window).resize(function(){
			$scope.setContainerWidth();
		});
		$(window).load(function(){
			$scope.setContainerWidth();
		});
	});

	$scope.setContainerWidth = function(){
		$scope.iso.arrange({
				itemSelector: '.grid-item',
				layoutMode: 'masonry'
			})
		$('.grid').css('width', 'auto'); //reset
		var windowWidth = $(document).width();
		var blockWidth = $('.quoteCard').outerWidth(true);
		var maxBoxPerRow = Math.floor(windowWidth / blockWidth);
		var newWidth = Math.floor(maxBoxPerRow * blockWidth);
		$('.grid').width(newWidth);
	};

	$scope.back = function(){
		$state.go('home.academie');
	}
});
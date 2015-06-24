angular.module('wolkidee.controllers', []).controller('HomeCtrl', function($scope, $meteor, $filter){
	$scope.title = 'test idee';

	$scope.iso;
  	$scope.quotes = $meteor.collection(Quotes);
  	var once = true;
    $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
  	    if(once){
	  		once = false;
	  		var elem = document.querySelector('.grid');
			$scope.iso = new Isotope( elem, {
				itemSelector: '.grid-item',
				layoutMode: 'masonry'
			});
			$scope.setContainerWidth();
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
});
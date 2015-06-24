angular.module('wolkidee.controllers').controller('ModerateCtrl', function($scope, $rootScope, $meteor, $filter, $state) {
	$scope.quotes = $meteor.collection(Quotes);
	$scope.activeState = $state.current.name;

	var iso;
	var once;

	update();
	function update(){
		once = true;
		$scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
	    	if(once){
	    		var elem = document.querySelector('.grid');
				iso = new Isotope( elem, {
				  // options
				  itemSelector: '.grid-item',
				  layoutMode: 'masonry'
				}); 
				once = false;
				$scope.setContainerWidth();
			}
		});

		$(document).ready(function(){
			$('.grid').css('margin', 'auto');
			if(typeof $scope.setContainerWidth === 'function'){
			    $scope.setContainerWidth();		
	  		}
		});

	  	$(window).resize(function(){
	  		if(typeof $scope.setContainerWidth === 'function'){
			    $scope.setContainerWidth();		
	  		}
		});
	}
	
	$(window).load(function() {
		iso.arrange();
	});
	
	$scope.accept = function(quote){
		Quotes.update({"_id":quote._id}, {$set: {"state": "accepted"}});
		swal({ title: "Geaccepteerd!",
			   showConfirmButton: false,
			   timer: 800,
			   type: "success" });
	};

	$scope.decline = function(quote){
		Quotes.update({"_id":quote._id}, {$set: {"state": "rejected"}});
		swal({ title: "Geweigerd!",
			   showConfirmButton: false,
			   timer: 800,
			   type: "error" });
	};

	$scope.recover = function(quote){
		Quotes.update({"_id":quote._id}, {$set: {"state": "pending"}});
		swal({ title: "Hersteld!",
			   showConfirmButton: false,
			   timer: 800,
			   type: "success" });
	};

	$scope.permaDelete = function(quote){
		swal({  title: "Weet je het zeker?",  
				text: "De quote zal PERMANENT verwijderd worden!",   
				type: "warning",   
				showCancelButton: true,   
				cancelButtonText: "Nee",
				confirmButtonColor: "#337ab7",   
				confirmButtonText: "Ja, delete de quote",   
				closeOnConfirm: false }, 
				function(){   
					Quotes.remove(quote._id);
					swal({title: "Verwijderd!", timer: 800, type: "success" }); 
				});
	};

	$scope.goToModerate = function(){
		$state.go('moderate.authenticated');
		update();
		iso.arrange();
	};

	$scope.goToRecover = function(){
		$state.go('moderate.recover');
		update();
		iso.arrange();
	};

	$scope.setContainerWidth = function(){
		// iso.arrange();
		$('.grid').css('width', 'auto'); //reset
		var windowWidth = $(document).width();
		var blockWidth = $('.quoteCard').outerWidth(true);
		var maxBoxPerRow = Math.floor(windowWidth / blockWidth);
		var newWidth = Math.floor(maxBoxPerRow * blockWidth);
		$('.grid').width(newWidth);
		$('.grid').css('marg', 'auto'); //reset
	};
});
angular.module('wolkidee.controllers').controller('ModerateCtrl', function($scope, $rootScope, $meteor, $filter, $timeout, $state) {
	$scope.quotes = $meteor.collection(Quotes);
	$scope.activeState = $state.current.name;

	$scope.iso;
	var once;
	$scope.standardTimeout = 800;
	$scope.updateAfter = 400;

	update();
	function update(){
		once = true;
		$scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
	    	if(once){
	    		console.log("HALLO");
	    		var elem = document.querySelector('.grid');
				$scope.iso = new Isotope( elem, {
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
		});

	  	$(window).resize(function(){
	  		if(typeof $rootScope.setContainerWidth === 'function'){
			    $rootScope.setContainerWidth();		
	  		}
		});
	}
	
	$(window).load(function() {
		$scope.iso.arrange();
	});
	
	$scope.accept = function(quote){
		Quotes.update({"_id":quote._id}, {$set: {"state": "accepted"}});
		$timeout(function(){
			$scope.iso.arrange();
		}, $scope.updateAfter);
		swal({ title: "Geaccepteerd!",
			   showConfirmButton: false,
			   timer: $scope.standardTimeout,
			   type: "success" });
	};

	$scope.decline = function(quote){
		Quotes.update({"_id":quote._id}, {$set: {"state": "rejected"}});
		$timeout(function(){
			$scope.iso.arrange();
		}, $scope.updateAfter);
		swal({ title: "Geweigerd!",
			   showConfirmButton: false,
			   timer: $scope.standardTimeout,
			   type: "error" }, function(){
			   		$scope.iso.arrange();
			   });
	};

	$scope.recover = function(quote){
		Quotes.update({"_id":quote._id}, {$set: {"state": "pending"}});
		$timeout(function(){
			$scope.iso.arrange();
		}, $scope.updateAfter);
		swal({ title: "Hersteld!",
			   showConfirmButton: false,
			   timer: $scope.standardTimeout,
			   type: "success" }, function(){
			   		$scope.iso.arrange();
			   });
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
					$timeout(function(){
						$scope.iso.arrange();
					}, $scope.updateAfter);
					swal({title: "Verwijderd!", timer: $scope.standardTimeout, type: "success" }, function(){
			   			$scope.iso.arrange();
			   		}); 
				});
	};

	$scope.goToModerate = function(){
		$state.go('moderate.authenticated');
		update();
		$scope.iso.arrange();
	};

	$scope.goToRecover = function(){
		$state.go('moderate.recover');
		update();
		$scope.iso.arrange();
	};

	$rootScope.setContainerWidth = function(){
		console.log("SET CONTAINER WIDTH");
		$('.grid').css('width', 'auto'); //reset
		var windowWidth = $(document).width();
		console.log("WindowWidth: " + windowWidth);
		var blockWidth = $('.quoteCard').outerWidth(true);
		console.log("Blockwidth: " + blockWidth);
		var maxBoxPerRow = Math.floor(windowWidth / blockWidth);
		console.log("MaxBoxPerRow: " + maxBoxPerRow);
		var newWidth = Math.floor(maxBoxPerRow * blockWidth);
		console.log("NewWidth: " + newWidth);
		$('.grid').width(newWidth);
	};
});
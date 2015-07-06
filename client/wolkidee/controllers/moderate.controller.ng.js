angular.module('wolkidee.controllers').controller('ModerateCtrl', function($scope, $rootScope, $meteor, $filter, $timeout, $state) {
	$scope.quotes = $meteor.collection(Quotes);
	$scope.activeState = $state.current.name;

	var once;
	$scope.standardTimeout = 800;
	$scope.updateAfter = 400;

	Quotes.find().observeChanges({
		changed: function (id, fields) {
		// console.log('changed: ' + id);
		// $scope.quotes = $filter('filter')($scope.allquotes, {'state': 'accepted', 'academie': $scope.academie.name});
		$timeout(function(){
				// console.log('arrange');
				createIsotope();
		}, 1000);
		}
	});

	function createIsotope(){
		var elem = document.querySelector('.grid');
		$scope.iso = new Isotope( elem, {
			itemSelector: '.grid-item',
			layoutMode: 'masonry'
		});
	}

	update();
	function update(){
		once = true;
		$scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
	    	if(once){
	    		createIsotope();
				once = false;
				$scope.setContainerWidth();
			} else {
	  	    	$timeout(function(){
	  	    		// console.log('relayout');
					createIsotope();
				}, 1000);
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

	function isoArrange(quote){
		var id = (quote._id._str ? quote._id._str : quote._id);
		$scope.iso.remove($('#' + id));
		$scope.iso.arrange({
			itemSelector: '.grid-item',
		  	layoutMode: 'masonry'
		});
	}
	
	$scope.accept = function(quote){
		Quotes.update({"_id":quote._id}, {$set: {"state": "accepted"}});
		$timeout(isoArrange(quote), $scope.updateAfter);
		swal({ title: "Geaccepteerd!",
			   showConfirmButton: false,
			   timer: $scope.standardTimeout,
			   type: "success" });
	};

	$scope.decline = function(quote){
		Quotes.update({"_id":quote._id}, {$set: {"state": "rejected"}});
		$timeout(isoArrange(quote), $scope.updateAfter);
		swal({ title: "Geweigerd!",
			   showConfirmButton: false,
			   timer: $scope.standardTimeout,
			   type: "error" });
	};

	$scope.recover = function(quote){
		Quotes.update({"_id":quote._id}, {$set: {"state": "pending"}});
		$timeout(isoArrange(quote), $scope.updateAfter);
		swal({ title: "Hersteld!",
			   showConfirmButton: false,
			   timer: $scope.standardTimeout,
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
					$timeout(isoArrange(quote), $scope.updateAfter);
					swal({title: "Verwijderd!", timer: $scope.standardTimeout, type: "success" }); 
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
		$('.grid').css('width', 'auto'); //reset
		var windowWidth = $(document).width();
		var blockWidth = $('.quoteCard').outerWidth(true);
		var maxBoxPerRow = Math.floor(windowWidth / blockWidth);
		var newWidth = Math.floor(maxBoxPerRow * blockWidth);
		$('.grid').width(newWidth);
	};
});
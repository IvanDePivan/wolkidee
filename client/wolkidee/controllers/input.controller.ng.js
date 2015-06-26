angular.module('wolkidee.controllers').controller('InputCtrl', function($scope, $meteor, $q, $timeout){

	$scope.name = "";
	$scope.title = "";
	$scope.quote = "";
	$scope.stop;
	$scope.academieInertObject = { name: "Academie" }

	var nameReqs = {
		scopeVar: "name",
		inputId: "#nameInput",
		formGroupId: "#nameFormGroup",
		prettyName: "naam",
		maxCharacters: "30",
		defaultPlaceholder: "Voor en achternaam!",
		errorPlaceholder: "De voor en achternaam moet tussen 2 en 30 karakters bevatten!"
	};
	var titleReqs = {
		scopeVar: "title",
		inputId: "#titleInput",
		formGroupId: "#titleFormGroup",
		prettyName: "title",
		maxCharacters: "30",
		defaultPlaceholder: 'Titel, bijvoorbeeld "Dag Avans!"',
		errorPlaceholder: "De titel moet tussen 2 en 30 karakters bevatten!"
	};
	var quoteReqs = {
		scopeVar: "quote",
		inputId: "#quoteInput",
		formGroupId: "#quoteFormGroup",
		prettyName: "quote",
		maxCharacters: "400",
		defaultPlaceholder: "Je wens, bericht, anekdote of groet.",
		errorPlaceholder: "De wens, bericht, anekdote of groet moet tussen 2 en 400 karakters bevatten!"
	};

	$scope.academies = $meteor.collection(Academies);
	$scope.academie = $scope.academieInertObject; //<--- de knop begint op "Academie"

	$scope.choseAcademie = function(selectedAcademie){
		$scope.academie= selectedAcademie
	}

	$scope.ticButtonClick = function(){
		var good = true;
		var uploadImage;

		$scope.chosenImage;

		good = checkFields([$scope.name, $scope.title, $scope.quote], [nameReqs, titleReqs, quoteReqs]);

		if(good === true) {
			var imageSource;

		var images = document.getElementById("uploadBtn").files;
		if (images && images[0]) {
		    var reader = new FileReader();
		    reader.onload = function (e) {
		      $scope.chosenImage = e.target.result;
		      $('#showChosenImage')
		       .attr('src', $scope.chosenImage)
		       .show();
		    };
		    reader.readAsDataURL(images[0]);
		}

		var quoteTemplate = '<div class="grid-item-swal thumbnail">';
		quoteTemplate += (images && images[0] ? '<div class="card-image"><img id="showChosenImage" class="actual-image"></div>': '');
		quoteTemplate += '<div class="caption"><h4>' + $scope.name + '</h4><h4>' + $scope.title +'</h4>';
		quoteTemplate += '<p>' + $scope.quote + '</p></div>';
		quoteTemplate += '</div><br />';
		quoteTemplate += '<p style="color: black;">Is dit goed?</p><br />';

		swal({   
			title: "Je quote zal er zo uit zien:",   
			text: quoteTemplate,   
			html: true, 
			showCancelButton: true,   
			confirmButtonColor: "#337ab7",   
			confirmButtonText: "Ja, verstuur maar!",   
			cancelButtonText: "Nee!",   
			closeOnConfirm: false,   closeOnCancel: false 
		}, function(isConfirm){   
				if (isConfirm) {   
					$scope.imageUploadOrNot();
				} else {    
					swal.close();
				} 
			});
			
		}
	};

	$scope.imageUploadOrNot = function(){
		if($scope.chosenImage){
			swal({
				title: 'Moment',
				text: 'Je quote/afbeelding wordt geupload.',
				allowEscapeKey: false,
				allowOutsideClick: false,
				showConfirmButton: false,
			});
			uploadToImgur($scope.chosenImage).then(function(result){
				$scope.insertQuote({
					'name': $scope.name,
					'title': $scope.title,
					'quote': $scope.quote,
					'image': result.link,
					'state': 'pending',
					'academie': $scope.academie.name,
					'shown': false
				});
			}, function(error){
				swal({ 	title: 'Oeps!', text: error.data.error, type: "error" });
				console.error(error);
			});
		} else {
			$scope.insertQuote({
				'name': $scope.name,
				'title': $scope.title,
				'quote': $scope.quote,
				'state': 'pending',
				'academie': $scope.academie.name,
				'shown': false
			});
		}
	}

	$scope.insertQuote = function(quote){
		Quotes.insert(quote,  
		function(){
			swal({ title: "Gelukt!", text: "Jou quote is verstuurd!", type: "success" }, function(){
					$scope.name = ""
					$scope.title = ""
					$scope.quote = ""
					$scope.academie = $scope.academieInertObject;
					$scope.$apply();
					$('#chooseFileImage').hide();
					document.getElementById("uploadBtn").value = ""
					$scope.chosenImage = undefined
			});
		});		
	}

	//TODO IH: find a better place for the apikey/this function
	function uploadToImgur(image){
		var deferred = $q.defer();
		Imgur.upload({
			image: image,
			apiKey: '7ef579444b40c32',
		}, function(error, data){
			if(error){
				deferred.reject(error);
				return deferred.promise;
			}
			deferred.resolve(data);
		});
		return deferred.promise;
	}

	function checkFields(fields, options){
		var result = true
		for (var i = fields.length - 1; i >= 0; i--) {
			if(!checkValid(fields[i], options[i])) {
				fields[i] = "";
				result = false
			}
		}
		if($scope.academie.name === $scope.academieInertObject.name){
			result = false;
			if(angular.isDefined(stop)){
				$timeout.cancel(stop);
            	stop = undefined;
			}
			$("#academieAlert").finish();
			$("#academieAlert").animate({
		    opacity: 1,
		  	}, 500, function() {
		  		stop = $timeout(function(){
					$("#academieAlert").animate({
				    	opacity: 0,
				  	}, 1000, function() {

				 	});
		  		}, 1000);
		 	});
		}
		return result;
	}

	function checkValid(field, options) {
		options.fieldToCheck = field;
		return checkValidity(options);
	}

	function checkValidity(arg){
		if(arg.fieldToCheck === "" || arg.fieldToCheck.length < 2){
			$(arg.inputId).attr("placeholder", arg.errorPlaceholder);
			$scope[arg.scopeVar] = "";
			$(arg.formGroupId).addClass("has-error");
			$(arg.formGroupId).keypress(function() {
			  $(arg.formGroupId).removeClass("has-error");
			  $(arg.inputId).attr("placeholder", arg.defaultPlaceholder);
			});
			return false;
		} else if(arg.fieldToCheck.length > arg.maxCharacters){
				sweetAlert({
					title: "Oeps!", 
					text: "Het veld '" + arg.prettyName + "' mag maximaal " + arg.maxCharacters + " karakters bevatten!", 
					type: "error",
					confirmButtonColor: "#337ab7"});
		}else {
			return true;
		}
	}
});
angular.module('wolkidee.controllers').controller('InputCtrl', function($scope, $meteor, $q, $timeout){

	$scope.name = "";
	$scope.title = "";
	$scope.quote = "";
	var maxLength = 200;
	// $scope.stop;
	$scope.academieInertObject = { name: "Academie" };
	$scope.uploading = false;

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
		maxCharacters: "" + maxLength,
		defaultPlaceholder: "Je wens, bericht, anekdote of groet.",
		errorPlaceholder: "De wens, bericht, anekdote of groet moet tussen 2 en " + maxLength + " karakters bevatten!"
	};

	$scope.academies = $meteor.collection(Academies);
	$scope.academie = $scope.academieInertObject; //<--- de knop begint op "Academie"

	$scope.choseAcademie = function(selectedAcademie){
		$scope.academie= selectedAcademie;
	};

	$scope.ticButtonClick = function(){
		var good = true;
		var uploadImage;

		// $scope.chosenImage;

		good = checkFields([$scope.name, $scope.title, $scope.quote], [nameReqs, titleReqs, quoteReqs]);

		if(good === true) {
			var imageSource;
			$scope.title = $scope.title.toUpperCase();
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
			var imageSelected = false;
			if(images && images[0]){
				imageSelected = true;
			}

			var quoteTemplate = '<div id="heightParam" class="grid-item-swal thumbnail">';
			quoteTemplate += (imageSelected ? '<div class="card-image"><img id="showChosenImage" onload="centerSweetAlert(true)" class="actual-image"></div>': '');
			quoteTemplate += '<div class="caption frutiger"><h4>' + $scope.name + '</h4><h4 class="avansRood">' + $scope.title +'</h4>';
			quoteTemplate += '<p class="verdana">' + $scope.quote + '</p></div>';
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
					if(!$scope.uploading){
						$scope.imageUploadOrNot();
					}  
				} else {    
					swal.close();
				} 
			});
			centerSweetAlert(false);
		}
	};

	$scope.imageUploadOrNot = function(){
		if($scope.chosenImage){
			swal({
				title: 'Moment',
				text: 'Je quote/afbeelding wordt geupload, Dit kan even duren.',
				allowEscapeKey: false,
				allowOutsideClick: false,
				showConfirmButton: false,
			});
			centerSweetAlert(false);

			var successFunction = function(result){
				$scope.insertQuote({
					'name': $scope.name,
					'title': $scope.title,
					'quote': $scope.quote,
					'image': result.link,
					'thumbnail': Imgur.toThumbnail(result.link, Imgur.LARGE_THUMBNAIL),
					'state': 'pending',
					'academie': $scope.academie.name,
					'shown': false
				});
			};
			uploadToImgur($scope.chosenImage).then(successFunction, function(error){
				$scope.uploading = false;
				console.error(error);			
				swal({   
					title: "Fout bij uploaden, opnieuw proberen?",   
					html: true, 
					showCancelButton: true,   
					confirmButtonColor: "#337ab7",   
					confirmButtonText: "Ja",   
					cancelButtonText: "Nee!",   
					closeOnConfirm: false,   closeOnCancel: true 
				}, function(isConfirm){   
					if (isConfirm) {
						if(!$scope.uploading){
							$scope.imageUploadOrNot();
						}   
					} else {    
						swal.close();
					} 
				});
				centerSweetAlert(false);
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
	};

	$scope.insertQuote = function(quote){
		$scope.uploading = false;
		Quotes.insert(quote,  
		function(){
			$scope.name = "";
			$scope.title = "";
			$scope.quote = "";
			$scope.countChar();
			$scope.academie = $scope.academieInertObject;
			$scope.$apply();
			$('#chooseFileImage').hide();
			document.getElementById("uploadBtn").value = "";
			$scope.chosenImage = undefined;
			swal({ title: "Gelukt!", text: "Jou quote is verstuurd!", type: "success", confirmButtonColor: "#337ab7"});
			centerSweetAlert(false);
		});		
	};

	function uploadToImgur(image){
		$scope.uploading = true;
		var deferred = $q.defer();
		try {
			Imgur.upload({
				image: image,
				apiKey: '7ef579444b40c32', //TODO IH: new api before release
			}, function(error, data){
				if(error){
					deferred.reject(error);
					return deferred.promise;
				}
				deferred.resolve(data);
			});
		} catch(err) {
			console.log(err);
			//return uploadToImgur(image);
			deferred.reject({data: {error: err}});
		}
		return deferred.promise;
	}

	function checkFields(fields, options){
		var result = true;
		for (var i = fields.length - 1; i >= 0; i--) {
			if(!checkValid(fields[i], options[i])) {
				fields[i] = "";
				result = false;
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
				centerSweetAlert(false);
		}else {
			return true;
		}
	}

	$scope.countChar = function() {
      var len = $scope.quote.length;
      var value = maxLength - len;
      $('#charNum').text(value);
      if(value < 100 && value > -1 ){
      	if(($('#charNum').hasClass("label-primary") || $('#charNum').hasClass("label-danger"))){
      		$('#charNum').removeClass("label-primary");
      		$('#charNum').removeClass("label-danger");
      		$('#charNum').addClass("label-warning");
      	}
      }
      else if(value < 0){
      	if($('#charNum').hasClass("label-primary") || $('#charNum').hasClass("label-warning")){
      		$('#charNum').removeClass("label-primary");
      		$('#charNum').removeClass("label-warning");
      		$('#charNum').addClass("label-danger");
      	}
      } else {
      	if($('#charNum').hasClass("label-danger") || $('#charNum').hasClass("label-warning") && value > 99){
      		$('#charNum').removeClass("label-danger");
      		$('#charNum').removeClass("label-warning");
      		$('#charNum').addClass("label-primary");
      	}
      }
    };
});
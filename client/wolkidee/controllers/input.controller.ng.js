angular.module('wolkidee.controllers').controller('InputCtrl', function($scope, $meteor, $q){

	var nameReqs = {
		inputId: "#nameInput",
		formGroupId: "#nameFormGroup",
		prettyName: "naam",
		maxCharacters: "20",
		defaultPlaceholder: "Voor en achternaam!",
		errorPlaceholder: "De voor en achternaam moet tussen 2 en 20 karakters bevatten!"
	};
	var titleReqs = {
		inputId: "#titleInput",
		formGroupId: "#titleFormGroup",
		prettyName: "title",
		maxCharacters: "20",
		defaultPlaceholder: 'Titel, bijvoorbeeld "Dag Avans!"',
		errorPlaceholder: "De titel moet tussen 2 en 20 karakters bevatten!"
	};
	var quoteReqs = {
		inputId: "#quoteInput",
		formGroupId: "#quoteFormGroup",
		prettyName: "quote",
		maxCharacters: "400",
		defaultPlaceholder: "Je wens, bericht, anekdote of groet.",
		errorPlaceholder: "De wens, bericht, anekdote of groet moet tussen 2 en 400 karakters bevatten!"
	};



	$scope.ticButtonClick = function(){
		var name = $scope.name;
		var title = $scope.title;
		var quote = $scope.quote;
		var good = true;
		var uploadImage;

		$scope.chosenImage = '';

		//Check name validity

		good = checkFields([name, title, quote], [nameReqs, titleReqs, quoteReqs]);

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
		quoteTemplate += '<div class="caption"><h4>' + name + '</h4><h4>' + title +'</h4>';
		quoteTemplate += '<p>' + quote + '</p></div>';
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
					swal({
						title: 'Moment',
						text: 'Je quote/afbeelding wordt geupload.',
						allowEscapeKey: false,
						showConfirmButton: false,
					});
					uploadToImgur($scope.chosenImage).then(function(result){
						console.log(result);
						Quotes.insert({
							'name': name,
							'title': title,
							'quote': quote,
							'image': result.link,
							'state': 'pending'
						}, function(){
							swal("Gelukt!", "Jou quote is verstuurd!", "success");
						});
					}, function(error){
						swal({ 	title: 'Oeps!', text: error.data.error, type: "error" });
						console.error(error);
					});
				} else {    
					swal.close();
				} 
			});
			
		}
	};

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
		//woop woop template method
		var result;
		for (var i = fields.length - 1; i >= 0; i--) {
			result = checkValid(fields[i], options[i]);
			if(!result) {
				return result;
			}
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
			$(arg.inputId).val("");
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
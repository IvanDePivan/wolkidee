angular.module('wolkidee.controllers').controller('InputCtrl', function($scope, $meteor){

	$scope.ticButtonClick = function(){
		var name = $("#nameInput").val();
		var title = $("#titleInput").val();
		var quote = $("#quoteInput").val();
		var good = true;

		//Check name validity
		good = $scope.checkValidity({
			fieldToCheck: name,
			inputId: "#nameInput",
			formGroupId: "#nameFormGroup",
			prettyName: "naam",
			maxCharacters: "20",
			defaultPlaceholder: "Voor en achternaam!",
			errorPlaceholder: "De voor en achternaam moet tussen 2 en 20 karakters bevatten!"
		});

		//Check title validity
		good = $scope.checkValidity({
			fieldToCheck: title,
			inputId: "#titleInput",
			formGroupId: "#titleFormGroup",
			prettyName: "title",
			maxCharacters: "20",
			defaultPlaceholder: 'Titel, bijvoorbeeld "Dag Avans!"',
			errorPlaceholder: "De titel moet tussen 2 en 20 karakters bevatten!"
		});

		//Check quote validity
		good = $scope.checkValidity({
			fieldToCheck: quote,
			inputId: "#quoteInput",
			formGroupId: "#quoteFormGroup",
			prettyName: "quote",
			maxCharacters: "400",
			defaultPlaceholder: "Je wens, bericht, anekdote of groet.",
			errorPlaceholder: "De wens, bericht, anekdote of groet moet tussen 2 en 400 karakters bevatten!"
		});

		if(good === true) {
			var imageSource;
			var images = document.getElementById("uploadBtn").files;
				if (images && images[0]) {
			    var reader = new FileReader();
			    reader.onload = function (e) {
			      $('#showChosenImage')
			        .attr('src', e.target.result)
			        .show();
			    };
			    reader.readAsDataURL(images[0]);
			}
			var quoteTemplate = '<div class="grid-item-swal thumbnail">';
			quoteTemplate += '<img id="showChosenImage" src="http://placehold.it/260x130/EEE" style="height: 130px; overflow:auto;">';
			quoteTemplate += '<div class="caption"><h4>' + name + '</h4><h4>' + title +'</h4>';
			quoteTemplate += '<p>' + quote + '</p></div>';
			quoteTemplate += '</div><br />';
			quoteTemplate += '<p style="color: black;">Is dit goed?</p><br />';
			console.log("showSwall");
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
						   
						Quotes.insert({
							'name': name,
							'title': title,
							'quote': quote,
							'image': 'http://placehold.it/300',
							'state': 'pending'
						}, function(){
							swal("Gelukt!", "Jou quote is verstuurd!", "success");
						});
					} else {    
						swal.close();
					} 
				});
		}
	};

	$scope.checkValidity = function(arg){
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
	};
});
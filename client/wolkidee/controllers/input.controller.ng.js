angular.module('wolkidee.controllers').controller('InputCtrl', function($scope){
	$scope.ticButtonClick = function(){
		var name = $("#nameInput").val();
		var title = $("#titleInput").val();
		var quote = $("#quoteInput").val();
		var good = true

		//Check name validity
		good = $scope.checkValidity({
			fieldToCheck: name,
			inputId: "#nameInput",
			formGroupId: "#nameFormGroup",
			defaultPlaceholder: "Voor en achternaam!",
			errorPlaceholder: "De voor en achternaam moet in totaal meer dan 2 karakters bevatten!"
		})

		//Check title validity
		good = $scope.checkValidity({
			fieldToCheck: title,
			inputId: "#titleInput",
			formGroupId: "#titleFormGroup",
			defaultPlaceholder: 'Titel, bijvoorbeeld "Dag Avans!"',
			errorPlaceholder: "De titel moet meer dan 2 karakters bevatten!"
		})

		//Check quote validity
		good = $scope.checkValidity({
			fieldToCheck: quote,
			inputId: "#quoteInput",
			formGroupId: "#quoteFormGroup",
			defaultPlaceholder: "Je wens, bericht, anekdote of groet.",
			errorPlaceholder: "De wens, bericht, anekdote of groet moet meer dan 2 karakters bevatten!"
		})
		if(good == true) {
			swal({   
				title: "Je quote zal er zo uit zien:",   
				text: "A custom <span style='color:#F8BB86'>html<span> message. <p>Is dit goed?</p>",   
				html: true, 
				showCancelButton: true,   
				confirmButtonColor: "#337ab7",   
				confirmButtonText: "Ja, verstuur maar!",   
				cancelButtonText: "Nee!",   
				closeOnConfirm: false,   closeOnCancel: false 
			}, function(isConfirm){   
					if (isConfirm) {     
						swal("Deleted!", "Your imaginary file has been deleted.", "success");   
					} else {    
					 	swal("Cancelled", "Your imaginary file is safe :)", "error"); 
					} 
				});
		}
	}

	$scope.checkValidity = function(arg){
		if(arg.fieldToCheck === "" || arg.fieldToCheck.length < 2){
			$(arg.inputId).attr("placeholder", arg.errorPlaceholder);
			$(arg.inputId).val("");
			$(arg.formGroupId).addClass("has-error");
			$(arg.formGroupId).keypress(function() {
			  $(arg.formGroupId).removeClass("has-error");
			  $(arg.inputId).attr("placeholder", arg.defaultPlaceholder);
			});
			return false
		} else {
			return true;
		}
	}
});
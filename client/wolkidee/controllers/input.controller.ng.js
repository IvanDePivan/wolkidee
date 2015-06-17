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
			console.log("Dikke prima");
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
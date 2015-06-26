angular.module('wolkidee.controllers', []).controller('EducationCtrl', function($scope, $meteor, $filter, $state){
	$scope.educationInertObject = { name: "Opleiding" }
	$scope.educations = $meteor.collection(Educations);
	$scope.education = $scope.educationInertObject; //<--- de knop begint op "Opleiding"

	$scope.choseEducation = function(selectedEducation){
		$scope.education = selectedEducation
	}

	$scope.goToMain = function(){
		if($scope.education.name === $scope.educationInertObject.name){
			swal({ title: "Opleiding moet gekozen worden!", 
                               showConfirmButton: false,
                               timer: 800, 
                               type: "error" });
		} else {
			$state.go('home.main', { education: $scope.education.name })
		}
	}
});
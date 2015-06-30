angular.module('wolkidee.controllers', []).controller('AcademieCtrl', function($scope, $meteor, $filter, $state, $window){
	$scope.academieInertObject = { name: "Academie" };
	$scope.academies = $meteor.collection(Academies);
	$scope.academie = $scope.academieInertObject; //<--- de knop begint op "Academie"

	$scope.choseAcademie = function(selectedAcademie){
		$scope.academie = selectedAcademie;
	};

	$scope.goToMain = function(){
		if($scope.academie.name === $scope.academieInertObject.name){
			swal({ title: "Academie moet gekozen worden!", 
                               showConfirmButton: false,
                               timer: 800, 
                               type: "error" });
		} else {
			$window.location.href = '/main/' + $scope.academie.name;
			// $state.go('home.main', { academie: $scope.academie.name });
		}
	};
});
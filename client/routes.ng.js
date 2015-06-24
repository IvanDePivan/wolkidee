angular.module("wolkidee").config(function($urlRouterProvider, $stateProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $stateProvider
        .state('app', {
            abstract: true,
            templateUrl: 'client/wolkidee/views/app.ng.html'
        })
        .state('app.home', {
            url: '/',
            templateUrl: 'client/wolkidee/views/home.ng.html',
            controller: 'HomeCtrl'
        })
        .state('input', {
            url: '/input',
            templateUrl: 'client/wolkidee/views/input.ng.html',
            controller: 'InputCtrl'
        })
        .state('output', {
            url: '/output',
            templateUrl: 'client/wolkidee/views/output.ng.html',
            controller: 'OutputCtrl'
        })
        .state('moderate', {
            url: '/moderate',
            templateUrl: 'client/wolkidee/views/moderate.ng.html',
            controller: function($scope, $state){
                var development = true;
                if(development){
                    $state.go('moderate.authenticated');
                } else {
                    $state.go('moderate.nonAuthenticated');
                }
                
            }
        })
        .state('moderate.nonAuthenticated', {
            templateUrl: 'client/wolkidee/views/moderateNonAuthenticated.ng.html',
            controller: function($scope, $state){
                $scope.login = function(){
                    var password = "ABCCMDcombi2015";
                    var inputPass = $("#moderateField").val();
                    if(password === inputPass){
                        $state.go('moderate.authenticated');
                    } else {
                        swal({ title: "Verkeerd wachtwoord", 
                               showConfirmButton: false,
                               timer: 800, 
                               type: "error" });
                    }
                }
            }
        })
        .state('moderate.authenticated', {
            url: '/authenticated',
            templateUrl: 'client/wolkidee/views/moderateAuthenticated.ng.html',
            controller: 'ModerateCtrl'
        })
        .state('moderate.recover', {
            url: '/recover',
            templateUrl: 'client/wolkidee/views/moderateRecover.ng.html',
            controller: 'ModerateCtrl'
        });
        


    $urlRouterProvider.otherwise("/");
});

angular.module("wolkidee").directive('modnav', function() {
  return {
    restrict: 'E',
    templateUrl: 'client/wolkidee/directives/navModerate.ng.html',
  }
});

angular.module("wolkidee").directive('cards', function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'client/wolkidee/directives/cards.ng.html',
  }
});

angular.module("wolkidee").directive('card', function() {
  return {
    restrict: 'E',
    templateUrl: 'client/wolkidee/directives/card.ng.html',
  }
});

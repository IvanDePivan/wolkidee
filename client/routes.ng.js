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
                var development = false;
                if(development){
                    //Default go to authenticated -- development
                    $state.go('moderate.Authenticated');
                } else {
                    //Default go to login screen -- production
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
                        $state.go('moderate.Authenticated');
                    } else {
                        swal({ title: "Verkeerd wachtwoord", 
                               showConfirmButton: false,
                               timer: 800, 
                               type: "error" });
                    }
                }
            }
        }).state('moderate.Authenticated', {
            url: '/authenticated',
            templateUrl: 'client/wolkidee/views/moderateAuthenticated.ng.html',
            controller: 'ModerateCtrl'
        });
        


    $urlRouterProvider.otherwise("/");
});
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
        });

    $urlRouterProvider.otherwise("/");
});
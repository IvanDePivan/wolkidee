Quotes = new Mongo.Collection("quotes");
Educations = new Mongo.Collection("educations");

angular.module('wolkidee',['angular.snackbar', 'angular-meteor', 'ui.router', 'wolkidee.controllers', 'wolkidee.directives']);

angular.module('wolkidee').run(function(){
	// console.log('Booted');
});
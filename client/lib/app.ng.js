Quotes = new Mongo.Collection("quotes");
Academies = new Mongo.Collection("academies");

angular.module('wolkidee',['angular.snackbar', 'angular-meteor', 'ui.router', 'wolkidee.controllers']);

angular.module('wolkidee').run(function(){
	// console.log('Booted');
});
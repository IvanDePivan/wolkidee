Quotes = new Mongo.Collection("quotes");

angular.module('wolkidee',['angular.snackbar', 'angular-meteor', 'ui.router', 'wolkidee.controllers']);

angular.module('wolkidee').run(function(){
	// console.log('Booted');
});
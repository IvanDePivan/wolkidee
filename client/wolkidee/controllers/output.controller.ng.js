angular.module('wolkidee.controllers').controller('OutputCtrl', function($scope, $meteor, $filter) {
    var fadeInClasses = 'animated fadeInLeft';
    var fadeOutClasses = 'animated fadeOutRight';
    var hideClasses = 'hidden';
    var once = true;
    var frequency = 6000;

    var acceptedQuotes = $filter('filter')($meteor.collection(Quotes), {'state': 'accepted'});
    var count = acceptedQuotes.length;

    $scope.quote = acceptedQuotes[randomNumber()];
    

    function randomNumber() {
    	var test = Math.floor(Math.random() * count);
        return test;
    }

    function countQuotes(){
    	count = acceptedQuotes.length;
    }

    function nextQuote() {
        $scope.quote = acceptedQuotes[randomNumber()];
    }

    function getAcceptedQuotes(){
    	acceptedQuotes = $filter('filter')($meteor.collection(Quotes), {'state': 'accepted'});
    }

    function fadeOut() {
        console.log('fadeOut');
        $('#testDiv').removeClass(fadeInClasses);
        $('#testDiv').addClass(fadeOutClasses);
    }

    function fadeIn() {
        console.log('fadeIn');
        $('#testDiv').removeClass(hideClasses);
        $('#testDiv').removeClass(fadeOutClasses);
        $('#testDiv').addClass(fadeInClasses);
    }

    function fadeLoop() {
        setInterval(function() {
            fadeOut();
            setTimeout(function(){
            	getAcceptedQuotes();
            	countQuotes();
            	nextQuote();
            }, 1000);
        }, frequency);
        setTimeout(function() {
            setInterval(function() {
                fadeIn();
            }, frequency);
        }, frequency / 3);
    }

    $scope.$on('$viewContentLoaded', function() {
        if (once) {
            fadeLoop();
            once = false;
        }
    });
});
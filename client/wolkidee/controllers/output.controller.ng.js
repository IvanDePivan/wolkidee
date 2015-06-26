angular.module('wolkidee.controllers').controller('OutputCtrl', function($scope, $meteor, $filter) {
    var fadeInClasses = 'animated fadeInLeft';
    var fadeOutClasses = 'animated fadeOutRight';
    var hideClasses = 'hidden';
    var once = true;
    var frequency = 6000;

    var acceptedQuotes = $filter('filter')($meteor.collection(Quotes), {'state': 'accepted'});
    var newQuotes = $filter('filter')($meteor.collection(Quotes), {'state': 'accepted', 'shown': false});
    
    var count = acceptedQuotes.length;
    var newCount = newQuotes.length;

    $scope.quote = acceptedQuotes[randomNumber()];
    

    function randomNumber(limit) {
    	var test = Math.floor(Math.random() * limit);
        return test;
    }

    function countQuotes(){
    	count = acceptedQuotes.length;
        newCount = newQuotes.length;
    }

    function nextQuote() {
        if(newCount > 0){
           $scope.quote = newQuotes[randomNumber(newCount)]; 
           Quotes.update({"_id":$scope.quote._id}, {$set: {'shown': true}});
        } else {
            $scope.quote = acceptedQuotes[randomNumber(count)];
        }
    }

    function getAcceptedQuotes(){
    	acceptedQuotes = $filter('filter')($meteor.collection(Quotes), {'state': 'accepted'});
    }

    function getNewQuotes(){
        newQuotes = $filter('filter')($meteor.collection(Quotes), {'state': 'accepted', 'shown': false});
    }

    function fadeOut() {
        $('#testDiv').removeClass(fadeInClasses);
        $('#testDiv').addClass(fadeOutClasses);
    }

    function fadeIn() {
        $('#testDiv').removeClass(hideClasses);
        $('#testDiv').removeClass(fadeOutClasses);
        $('#testDiv').addClass(fadeInClasses);
    }

    function fadeLoop() {
        setInterval(function() {
            fadeOut();
            setTimeout(function(){
            	getAcceptedQuotes();
                getNewQuotes();
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
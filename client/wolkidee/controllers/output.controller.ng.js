angular.module('wolkidee.controllers').controller('OutputCtrl', function($scope, $meteor, $filter) {
    var fadeInClasses = 'animated fadeInLeft';
    var fadeOutClasses = 'animated fadeOutRight';
    var hideClasses = 'hidden';
    var once = true;
    var frequency = 9000;

    var acceptedQuotes = $filter('filter')($meteor.collection(Quotes), {'state': 'accepted'});
    var newQuotes = $filter('filter')($meteor.collection(Quotes), {'state': 'accepted', 'shown': false});
    
    var count = acceptedQuotes.length;
    var newCount = newQuotes.length;

    $scope.outputCard = "#outputCardContainer";
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
        $($scope.outputCard).removeClass(fadeInClasses);
        $($scope.outputCard).addClass(fadeOutClasses);
    }

    function fadeIn() {
        $($scope.outputCard).removeClass(hideClasses);
        resizeQuote();
        center(".thumbnail");
        $($scope.outputCard).removeClass(fadeOutClasses);
        $($scope.outputCard).addClass(fadeInClasses);
    }

    function resizeQuote(){
        var windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        var height = $("#quoteContent").height();
        var newMaxHeight = windowHeight - height - 20;
        $(".card-image-output").css({ "max-height": newMaxHeight + 'px' });
    }
    var looptimes = 0;
    function fadeLoop() {
        setInterval(function() {
                fadeOut();
                setTimeout(function(){
                    getAcceptedQuotes();
                    getNewQuotes();
                    countQuotes();
                    nextQuote();
                }, 1000);
                setTimeout(function() {
                    fadeIn();
                }, frequency / 3);
        }, frequency);
    }

    $scope.$on('$viewContentLoaded', function() {
        if (once) {
            fadeLoop();
            once = false;
        }
    });
});
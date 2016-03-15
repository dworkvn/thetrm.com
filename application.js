var app = angular.module("trm", ["firebase"]);

app.controller("HomeCtrl", function($scope, $firebaseArray) {
    var ref = new Firebase("https://thetrm.firebaseio.com/events").orderByChild("ts").limitToLast(20);
    $scope.events = $firebaseArray(ref);
    $scope.setSelectedEvent = function(event) {
        $scope.selectedEvent = event;
    }
    $scope.mode = 'html';
}).config(function($sceProvider) {
    // Completely disable SCE.  For demonstration purposes only!
    // Do not use in new projects.
    $sceProvider.enabled(false);
}).filter('toTime',function(){
    return function(source) {
        return new Date(parseInt(source)*1000).toString();
    }
})
    .filter('reverse', function() {
        return function(items) {
            return items.slice().reverse();
        };
    })

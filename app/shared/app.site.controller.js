angular
    .module('appSite')
    .controller('SiteController', SiteController);

function SiteController($scope, DataService) {
    "use strict";

    activate();

    function activate() {
        
        DataService
            .getData("assets/data/site.json")
            .then(function (res) {
                $scope.title = res.data.title; 
            });

    }
    
}

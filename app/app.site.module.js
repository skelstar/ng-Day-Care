angular
    .module('appSite', ['ui.router', 'textAngular', 'firebase'])
    .config(function ($stateProvider, $urlRouterProvider) {
        "use strict";
        
        $urlRouterProvider.otherwise("/page1");
    
        $stateProvider
            .state('page1', {
                url: "/page1",
                templateUrl: "partials/page1.html"
            })
            .state('page2', {
                url: "/page2",
                templateUrl: "partials/page2.html"
            })
            .state('editorTest', {
                url: "/editor-test",
                templateUrl: "partials/editorTest.html"
            
            });
        
    })
    .run(['$rootScope', '$http', function ($rootScope, $http) {
        "use strict";


    }]);
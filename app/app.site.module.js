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
    .config(function ($provide) {
        "use strict";
        $provide.decorator('taOptions', ['taRegisterTool', '$delegate',
             function (taRegisterTool, taOptions) { // $delegate is the taOptions we are decorating
                taOptions.toolbar = [
                  ['h1', 'h3', 'p', 'quote'],
                  ['bold', 'italics', 'underline', 'ul', 'ol', 'redo', 'undo', 'clear'],
                  ['justifyLeft', 'justifyCenter', 'justifyRight'],
                  ['html', 'insertImage', 'insertLink', 'insertVideo', 'wordcount', 'charcount']
                ];
                return taOptions;
            }]);

    })
    .constant('AUTHEVENTS', {
        loginSuccess: 'auth-login-success',
        loginFailed: 'auth-login-failed',
        logoutSuccess: 'auth-logout-success',
        sessionTimeout: 'auth-session-timeout',
        notAuthenticated: 'auth-not-authenticated',
        notAuthorized: 'auth-not-authorized'
    })
    .controller('SiteController', SiteController)
    .directive('myEditable', MyEditableDirective);

angular
    .module('appSite')
    .controller('SiteController', SiteController);

function SiteController($scope, $rootScope, DataService, $firebaseAuth) {
    "use strict";
    
    $scope.htmlContent = '<h2>Try me!</h2><p>textAngular is a super cool WYSIWYG Text Editor</p>';
    $scope.test = "test win";
    this.isSignedIn = function () {
                        var signedIn = $scope.auth.$getAuth();
                        return signedIn != null;
                      };

    this.getSignInByEmail = function (email, password) {
                                return $scope.auth.$authWithPassword(
                                {
                                    email: email,
                                    password: password
                                });
                            };

    $scope.signIn = function () {
        
        $scope.auth.$authWithPassword({ email: $scope.email, password: $scope.password})
                    .then(function (authData) {
                        alert("Successfully logged in");
                    })
                    .catch(function( error) {
                        console.log("Authentication failed: " + error.message);
                    });
    }
    
    $scope.$on('$stateChangeSuccess', 
        function(event, toState, toParams, fromState, fromParams) {  
        }
    );
    

    activate();
    
    function activate() {
        
        DataService
            .getData("assets/data/site.json")
            .then(function (res) {
                $scope.title = res.data.title; 
                var ref = new Firebase(res.data.firebaseAuthPath);
                $scope.auth = $firebaseAuth(ref);
            });     
        
        $scope.email = "skelstar@gmail.com";
        $scope.password = "ec11225f87";
    }
    
    
    
}

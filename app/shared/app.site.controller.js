function SiteController($scope, $rootScope, DataService, $firebaseAuth, AUTHEVENTS) {
    "use strict";

    $scope.htmlContent = '<h2>Try me!</h2><p>textAngular is a super cool WYSIWYG Text Editor</p>';
    $scope.test = "test win";
    $scope.auth = {};
    $scope.edit = false;

    $scope.credentials = {
        email: '',
        password: ''
    };

    $scope.isSignedIn = function () {
        return $rootScope.loggedIn == true;
    };
    
    $scope.editMode = function () {
        return $scope.edit && $scope.isSignedIn();
    };
    
    $scope.displayMode = function () {
        return $scope.edit == false || $scope.isSignedIn() == false; 
    }
    
    $scope.toggleEdit = function () {
        if ($scope.isSignedIn) {
            $scope.edit = !$scope.edit;
        } else {
            $scope.edit = false;
        }
    };

    $scope.getSignInByEmail = function (email, password) {
        return $scope.auth.$authWithPassword({
            email: $scope.credentials.email,
            password: $scope.credentials.password
        });
    };

    $scope.signIn = function (creds) {

        $scope.auth.$authWithPassword({
            email: creds.email,
            password: creds.password
        }).then(function (authData) {
            $rootScope.$broadcast(AUTHEVENTS.loginSuccess);
            $rootScope.loggedIn = true;
        }).catch(function (error) {
            $rootScope.$broadcast(AUTHEVENTS.loginFailed);
            $rootScope.loggedIn = false;
        });
    };

    activate();

    function activate() {

        DataService
            .getData("assets/data/site.json")
            .then(function (res) {
                $scope.title = res.data.title;
                var ref = new Firebase(res.data.firebaseAuthPath);
                $scope.auth = $firebaseAuth(ref);
            });

        $scope.credentials.email = "skelstar@gmail.com";
        $scope.credentials.password = "ec11225f87";
    }
}

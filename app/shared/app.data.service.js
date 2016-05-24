angular
    .module('appSite')
    .service('DataService', DataService);

function DataService($http) {
    "use strict";
    
    this.getData = function (filepath) {
        return $http.get(filepath);
    };
}

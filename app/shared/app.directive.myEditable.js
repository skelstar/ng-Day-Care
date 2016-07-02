
function MyEditableDirective () {
    return {
        restrict: "C",  // only as a class
        transclude: true,
        template: "<text-angular name="htmlContent1" ng-model="htmlContent1"></text-angular>"
        controller: function() {
        },
        link: function (scope, elem, attrs) {
            elem.bind('click', function () {
                alert("clicked!");
            });
        }
    }
}
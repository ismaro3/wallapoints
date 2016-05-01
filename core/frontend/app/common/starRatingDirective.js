'use strict';

/**
 * Servicio que se encarga de la gestión de tokens de usuario.
 */
angular.module('frontend').directive('starRating', starRating);

function starRating() {
    return {
        restrict: 'EA',
        template:
        '<ul class="star-rating" ng-class="{readonly: readonly}">' +
        '  <li ng-repeat="star in stars" class="star" ng-class="{filled: star.filled}" style="font-size:1.9em;"ng-click="toggle($index)">' +
        '    <i class="glyphicon glyphicon-star"></i>' + // or &#9733
        '  </li>' +
        '</ul>',
        scope: {
            ratingValue: '=ngModel',
            max: '=?', // optional (default is 5)
            onRatingSelect: '&?',
            readonly: '=?'
        },
        link: function(scope, element, attributes) {
            if (scope.max == undefined) {
                scope.max = 5;
            }

            function updateStars() {
                scope.stars = [];
                for (var i = 0; i < scope.max; i++) {
                    scope.stars.push({
                        filled: i < scope.ratingValue
                    });
                }
                console.log("updated");
                console.log(scope.stars);
            };

            scope.toggle = function(index) {
                if (scope.readonly == undefined || scope.readonly === false){
                    scope.ratingValue = index + 1;
                    scope.onRatingSelect({
                        rating: index + 1
                    });
                }
            };
            scope.$watch('ratingValue', function(oldValue, newValue) {
                //if (newValue) {
                    updateStars();
                //}
            });

            updateStars();
        }
    };
}
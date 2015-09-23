(function(){
	"use strict";

	app
		.directive('trophHeader', function() {
			return {
				restrict: 'E',
				templateUrl: 'views/partials/troph-header.html'
			}
		})
		.directive('trophMain', function() {
			return {
				restrict: 'E',
				templateUrl: 'views/partials/troph-main.html'
			}
		})
		.directive('trophFooter', function() {
			return {
				restrict: 'E',
				templateUrl: 'views/partials/troph-footer.html'
			}
		})
		;
})();
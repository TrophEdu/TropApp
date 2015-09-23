(function(){
	"use strict";

	app
		.controller("AppCtrl", function($scope) {
		})

		.controller("TrophMainCtrl", function($scope) {
			$scope.subjects=[
				{name: "Chemistry", color: "btn-info", selecting: false},
				{name: "Engineering", color: "btn-success", selecting: false},
				{name: "Biology", color: "btn-danger", selecting: false}
			];

			$scope.chooseSubject = function (subject) {
				angular.element('.all-subjects  button').css({
					"width": "100px",
					"height": "100px"
				});
				angular.element('button#' + subject).css({
					"width": "150px",
					"height": "150px"
				});
			} 	

		})
		;
})();
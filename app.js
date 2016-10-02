var app = angular.module('questionaire', ['ngRoute', 'questionaire']);


// provideing url for vies
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	$routeProvider.
	when('/questions/:param', {
		templateUrl: 'views/questions.html'
	}).
	when('/results/', {
		templateUrl: 'views/results.html'
	}).
	otherwise({
		templateUrl: 'views/intro.html',
		controller: 'mainController'
	});

}])
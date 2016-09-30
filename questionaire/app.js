var app = angular.module('questionaire', ['ngRoute', 'questionaire']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	$routeProvider.
	when('/questions/:param', {
		templateUrl: 'views/questions.html'
	}).
	when('/visual/2', {
		templateUrl: '/Socialcops-sachin/partials/visual2.html',
		controller: 'Visual2'
	}).
	when('/visual/3', {
		templateUrl: '/Socialcops-sachin/partials/visual3.html',
		controller: 'Visual3'
	}).
	otherwise({
		templateUrl: 'views/intro.html',
		controller: 'mainController'
	});

}])
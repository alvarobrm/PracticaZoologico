angular.module("app").config(RouteConfig);

RouteConfig.$inject = [ '$routeProvider' ];

function RouteConfig($routeProvider) {

	$routeProvider.when('/', { templateUrl : "templates/inicio.html" });
	
	$routeProvider.when('/animallist', { templateUrl : "templates/animallist.html" });
	$routeProvider.when('/newanimal', { templateUrl : "templates/newanimal.html" });
	$routeProvider.when('/animal/:id', { templateUrl : "templates/animal.html" });
}
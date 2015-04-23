angular.module("app").config(RouteConfig);

RouteConfig.$inject = [ '$routeProvider' ];

function RouteConfig($routeProvider) {

	$routeProvider.when('/', { templateUrl : "templates/empleadolist.html" });
	$routeProvider.when('/newempleado', { templateUrl : "templates/newempleado.html" });
	$routeProvider.when('/empleado/:id', { templateUrl : "templates/empleado.html" });

}
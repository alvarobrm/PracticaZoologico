angular.module("app").config(RouteConfig);

RouteConfig.$inject = [ '$routeProvider' ];

function RouteConfig($routeProvider) {

	$routeProvider.when('/', { templateUrl : "templates/inicio.html" });
	$routeProvider.when('/newpost', { templateUrl : "templates/newpost.html" });
	$routeProvider.when('/post/:id', { templateUrl : "templates/post.html" });
	$routeProvider.when('/adminAnimales', { templateUrl : "templates/adminAnimales.html" });
}
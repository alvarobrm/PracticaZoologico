angular.module("app").config(RouteConfig);

RouteConfig.$inject = [ '$routeProvider' ];

function RouteConfig($routeProvider) {

	$routeProvider.when('/animallist', { templateUrl : "templates/postlist.html" });
	$routeProvider.when('/newpost', { templateUrl : "templates/newpost.html" });
	$routeProvider.when('/post/:id', { templateUrl : "templates/post.html" });
	
	$routeProvider.when('/', { templateUrl : "templates/animallist.html" });
	$routeProvider.when('/newanimal', { templateUrl : "templates/newanimal.html" });
	$routeProvider.when('/animal/:id', { templateUrl : "templates/animal.html" });

}
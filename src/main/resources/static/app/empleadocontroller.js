angular.module("app").controller("EmpleadoController", EmpleadoController);

PostController.$inject = ["blogManager", "$routeParams"];

function EmpleadoController(blogManager, $routeParams) {

	var vm = this;
	
	//View model properties
	
	vm.empleado = {};
		
	//Controller logic
	
	vm.empleado = blogManager.getEmpleado($routeParams.id);

};


angular.module("app").controller("NewEmpleadoController", NewEmpleadoController);

NewEmpleadoController.$inject = ["blogManager", "$location"];

function NewEmpleadoController(blogManager, $location) {

	var vm = this;
	
	//View model properties
	
	vm.newEmpleado = {};
	
	//Controller actions

	vm.addEmpleado = function(newEmpleado) {
		
		blogManager.newEmpleado(newEmpleado);
		
		vm.newEmpleado = {};
		
		$location.path("/");
	};
};


angular.module("app").controller("EmpleadoListController", EmpleadoListController);

EmpleadoListController.$inject = ["blogManager", "$location"];

function EmpleadoListController(blogManager, $location) {

	var vm = this;
	
	//View model properties
	
	vm.empleados = []
		
	//Controller logic
	
	vm.empleados = blogManager.getEmpleados();
	
	//Controller actions

	vm.deleteEmpleado = function(empleado) {
		blogManager.deleteEmpleado(empleado);
	};
	
	vm.viewEmpleado = function(empleado) {
		$location.path("/empleado");
	};
	
	vm.reload = function(empleado) {
		blogManager.reload().then(function(empleados){
			vm.empleados = empleados;
		});
	};
};


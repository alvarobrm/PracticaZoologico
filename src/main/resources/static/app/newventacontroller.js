angular.module("app").controller("NewVentaController", NewVentaController);

NewVentaController.$inject = ["ventaManager", "$location"];

function NewVentaController(ventaManager, $location) {

	var vm = this;
	//View model properties
	vm.newVenta = {};
	
	//Controller actions
	
	vm.addVenta = function(newVenta) {
		ventaManager.newVenta(newVenta);
		
		vm.newVenta = {};
		
		$location.path("/ventalist");
	};
};

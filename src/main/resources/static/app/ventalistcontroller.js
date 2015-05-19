angular.module("app").controller("VentaListController", VentaListController);

VentaListController.$inject = ["ventaManager", "$location"];

function VentaListController(ventaManager, $location) {

	var vm = this;
	
	//View model properties
	
	vm.ventas = []
		
	//Controller logic
	
	vm.ventas = ventaManager.getVentas();
	
	//Controller actions

	vm.deleteVenta = function(venta) {
		ventaManager.deleteVenta(venta);
	};
	
	vm.viewVenta = function(venta) {
		$location.path("/venta");
	};
	
	vm.reload = function(venta) {
		ventaManager.reload().then(function(ventas){
			vm.ventas = ventas;
		});
	};
};


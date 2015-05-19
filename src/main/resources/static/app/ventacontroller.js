angular.module("app").controller("VentaController", VentaController);

VentaController.$inject = ["ventaManager", "$routeParams", "$location"];

function VentaController(ventaManager, $routeParams, $location) {

	var vm = this;
	
	//View model properties

	vm.venta = {};
		
	//Controller logic
	
	vm.venta = ventaManager.getVenta($routeParams.id);

//Controller actions
	
	vm.deleteVenta = function(venta) {
		
		var answer = confirm('Delete confirmation',
				'Are you sure you want to delete this venta?', 
				'Cancel', 'Delete' ); 
		            if(answer === true){
		            	ventaManager.deleteVenta(venta);
		        		$location.path("/ventalist");		            	
		            }					
	};
	
};

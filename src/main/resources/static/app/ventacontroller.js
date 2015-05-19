angular.module("app").controller("VentaController", VentaController);

VentaController.$inject = ["ventaManager", "$routeParams"];

function VentaController(ventaManager, $routeParams) {

	var vm = this;
	
	//View model properties
	
	vm.venta = {};
		
	vm.venta = ventaManager.getVenta($routeParams.id);
	//Controller logic
	
//Controller actions
	
	vm.deleteVenta = function(venta) {
		
		LxNotificationService.confirm('Delete confirmation',
				'Are you sure you want to delete this venta?', 
				{ cancel:'Cancel', ok:'Delete' }, 
				function(answer)
		        {
		            if(answer === true){
		            	blogVenta.deleteVenta(venta);
		        		$location.path("/ventalist");		            	
		            }					
		        });
	};
}


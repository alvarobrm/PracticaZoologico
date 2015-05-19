angular.module("app").controller("ProductoController", ProductoController);

ProductoController.$inject = ["productoManager", "$routeParams", "$location"];

function ProductoController(productoManager, $routeParams, $location) {

	var vm = this;
	
	//View model properties

	vm.producto = {};
		
	//Controller logic
	
	vm.producto = productoManager.getProducto($routeParams.id);

//Controller actions
	
	vm.deleteProducto = function(producto) {
		
		var answer = confirm('Delete confirmation',
				'Are you sure you want to delete this post?', 
				'Cancel', 'Delete' ); 
		            if(answer === true){
		            	productoManager.deleteProducto(producto);
		        		$location.path("/listproducto");		            	
		            }					
	};
	
};


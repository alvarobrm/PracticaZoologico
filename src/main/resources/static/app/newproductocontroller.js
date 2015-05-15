angular.module("app").controller("NewProductoController", NewProductoController);

NewProductoController.$inject = ["productoManager", "$location"];

function NewProductoController(productoManager, $location) {

	var vm = this;
	//View model properties
	vm.newProducto = {};
	
	//Controller actions
	
	vm.addProducto = function(newProducto) {
		productoManager.newProducto(newProducto);
		
		vm.newProducto = {};
		
		$location.path("/productolist");
	};
};


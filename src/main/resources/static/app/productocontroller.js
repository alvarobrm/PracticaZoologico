angular.module("app").controller("ProductoController", ProductoController);

ProductoController.$inject = ["productoManager", "$routeParams"];

function ProductoController(productoManager, $routeParams) {

	var vm = this;
	
	//View model properties

	vm.producto = {};
		
	//Controller logic
	
	vm.producto = productoManager.getProducto($routeParams.id);

};


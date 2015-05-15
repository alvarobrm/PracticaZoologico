angular.module("app").controller("ProductoListController", ProductoListController);

ProductoListController.$inject = ["productoManager", "$location"];

function ProductoListController(productoManager, $location) {

	var vm = this;
	
	//View model properties
	
	vm.productos = []
		
	//Controller logic
	
	vm.productos = productoManager.getProductos();
	
	//Controller actions

	vm.deleteProducto = function(producto) {
		productoManager.deleteProducto(producto);
	};
	
	vm.viewProducto = function(producto) {
		$location.path("/producto");
	};
	
	vm.reload = function(producto) {
		productoManager.reload().then(function(productos){
			vm.productos = productos;
		});
	};
};


angular.module("app").factory("productoManager", productoManager);

productoManager.$inject = [ "$resource", "$timeout" ];

function productoManager($resource, $timeout) {

	var ProductoResource = $resource('/productos/:id', 
			{ id : '@id'}, 
			{ update : {method : "PUT"}}
		);

		var productos = [];

		function autoreload(){
			reload();
			$timeout(autoreload, 5000);
		}
		
		autoreload();
		
		return {
			reload : reload,
			getProductos : getProductos,
			getProducto : getProducto,		
			newProducto : newProducto,
			updateProducto : updateProducto,
			deleteProducto : deleteProducto
		}

		function reload(){
			return ProductoResource.query(function(newproductos){
				productos.length = 0;
				productos.push.apply(productos, newproductos);
			}).$promise;
		}
		
		function getProductos() {
			return productos;
		}

		function getProducto(id) {
			for (var i = 0; i < productos.length; i++) {
				if (productos[i].id.toString() === id) {
					return productos[i];
				}
			}
		}

		function borrarProducto(id) {
			productos.deleteProducto(id);
		}
		
		function newProducto(newProducto) {
			new ProductoResource(newProducto).$save(function(producto) {
				productos.push(producto);
			});
		}

		function updateProducto(updatedProducto) {
			updatedProducto.$update();
		}

		function deleteProducto(producto) {
			producto.$remove(function() {
				productos.splice(productos.indexOf(producto), 1);
			});
		}
}
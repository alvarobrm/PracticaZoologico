angular.module("app").factory("ventaManager", ventaManager);

ventaManager.$inject = [ "$resource", "$timeout" ];

function ventaManager($resource, $timeout) {

	var VentaResource = $resource('/ventas/:id', 
			{ id : '@id'}, 
			{ update : {method : "PUT"}}
		);

		var ventas = [];

		function autoreload(){
			reload();
			$timeout(autoreload, 5000);
		}
		
		autoreload();
		
		return {
			reload : reload,
			getVentas : getVentas,
			getVenta : getVenta,		
			newVenta : newVenta,
			updateVenta : updateVenta,
			deleteVenta : deleteVenta
		}

		function reload(){
			return VentaResource.query(function(newventas){
				ventas.length = 0;
				ventas.push.apply(ventas, newventas);
			}).$promise;
		}
		
		function getVentas() {
			return ventas;
		}

		function getVenta(id) {
			for (var i = 0; i < ventas.length; i++) {
				if (ventas[i].id.toString() === id) {
					return ventas[i];
				}
			}
		}
		
		function newVenta(newVenta) {
			new VentaResource(newVenta).$save(function(venta) {
				ventas.push(venta);
			});
		}

		function updateVenta(updatedVenta) {
			updatedVenta.$update();
		}

		function deleteVenta(venta) {
			venta.$remove(function() {
				ventas.splice(ventas.indexOf(venta), 1);
			});
		}
}
angular.module("app").factory("blogManager", blogManager);

blogManager.$inject = [ "$resource", "$timeout" ];

function blogManager($resource, $timeout) {
	
	var EmpleadoResource = $resource('/empleados/:id', 
			{ id : '@id'}, 
			{ update : {method : "PUT"}}
		);

		var empleados = [];

		function autoreload(){
			reload();
			$timeout(autoreload, 5000);
		}
		
		autoreload();
		
		return {
			reload : reload,
			getEmpleados : getEmpleados,
			getEmpleado : getEmpleado,		
			newEmpleado : newEmpleado,
			updateEmpleado : updateEmpleado,
			deleteEmpleado : deleteEmpleado
		}

		function reload(){
			return EmpleadoResource.query(function(newempleados){
				empleados.length = 0;
				empleados.push.apply(empleados, newempleados);
			}).$promise;
		}
		
		function getEmpleados() {
			return empleados;
		}

		function getEmpleado(id) {
			for (var i = 0; i < empleados.length; i++) {
				if (empleados[i].id.toString() === id) {
					return empleados[i];
				}
			}
		}

		function newEmpleado(newEmpleado) {
			new EmpleadoResource(newEmpleado).$save(function(empleado) {
				empleados.push(empleado);
			});
		}

		function updateEmpleado(updatedEmpleado) {
			updatedEmpleado.$update();
		}

		function deleteEmpleado(empleado) {
			empleado.$remove(function() {
				empleados.splice(empleados.indexOf(empleado), 1);
			});
		}	
}
angular.module("app").controller("ProductoController", ProductoController);

ProductoController.$inject = ["productoManager", "$routeParams", "$location", "LxNotificationService"];

function ProductoController(productoManager, $routeParams, $location, LxNotificationService) {

	var vm = this;
	
	//View model properties

	vm.producto = {};
		
	//Controller logic
	
	vm.producto = productoManager.getProducto($routeParams.id);

//Controller actions
	
	vm.deleteProducto = function(producto) {
		
		LxNotificationService.confirm('Delete confirmation',
				'Are you sure you want to delete this post?', 
				{ cancel:'Cancel', ok:'Delete' }, 
				function(answer)
		        {
		            if(answer === true){
		            	blogManager.deletePost(post);
		        		$location.path("/");		            	
		            }					
		        });
	};
	
};


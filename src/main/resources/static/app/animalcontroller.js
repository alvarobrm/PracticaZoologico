angular.module("app").controller("AnimalController", AnimalController);

AnimalController.$inject = ["animalManager", "$routeParams"];

function AnimalController(animalManager, $routeParams) {

	var vm = this;
	
	//View model properties
	
	vm.animal = {};
		
	vm.animal = animalManager.getAnimal($routeParams.id);
	//Controller logic
	
//Controller actions
	
	vm.deleteAnimal = function(animal) {
		
		LxNotificationService.confirm('Delete confirmation',
				'Are you sure you want to delete this post?', 
				{ cancel:'Cancel', ok:'Delete' }, 
				function(answer)
		        {
		            if(answer === true){
		            	blogAnimal.deleteAnimal(animal);
		        		$location.path("/animallist");		            	
		            }					
		        });
	};
}


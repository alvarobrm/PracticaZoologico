angular.module("app").controller("AnimalListController", AnimalListController);

AnimalListController.$inject = ["blogManager", "$location"];

function AnimalListController(blogManager, $location) {

	var vm = this;
	
	//View model properties
	
	vm.animales = []
		
	//Controller logic
	
	vm.animales = blogManager.getAnimales();
	
	//Controller actions

	vm.deleteAnimal = function(animal) {
		blogManager.deleteAnimal(animal);
	};
	
	vm.viewAnimal = function(animal) {
		$location.path("/animal");
	};
	
	vm.reload = function(animal) {
		blogManager.reload().then(function(animales){
			vm.animales = animales;
		});
	};
};


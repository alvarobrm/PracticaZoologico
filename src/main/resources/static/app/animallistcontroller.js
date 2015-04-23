angular.module("app").controller("AnimalListController", AnimalListController);

AnimalListController.$inject = ["animalManager", "$location"];

function AnimalListController(animalManager, $location) {

	var vm = this;
	
	//View model properties
	
	vm.animales = []
		
	//Controller logic
	
	vm.animales = animalManager.getAnimales();
	
	//Controller actions

	vm.deleteAnimal = function(animal) {
		animalManager.deleteAnimal(animal);
	};
	
	vm.viewAnimal = function(animal) {
		$location.path("/animal");
	};
	
	vm.reload = function(animal) {
		animalManager.reload().then(function(animales){
			vm.animales = animales;
		});
	};
};


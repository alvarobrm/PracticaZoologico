angular.module("app").controller("AnimalController", AnimalController);

AnimalController.$inject = ["animalManager", "$routeParams"];

function AnimalController(animalManager, $routeParams) {

	var vm = this;
	
	//View model properties
	vm.animales = [];
	vm.animal = {};
		
	vm.animales = animalManager.getAnimales();
	//Controller logic
	
	vm.animal = animalManager.getAnimal($routeParams.id);

	vm.borrarAnimal = function(animal) {
		animalManager.borrarAnimal($routeParams.id);
	};
};


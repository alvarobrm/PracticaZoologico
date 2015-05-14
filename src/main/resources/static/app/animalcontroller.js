angular.module("app").controller("AnimalController", AnimalController);

AnimalController.$inject = ["animalManager", "$routeParams"];

function AnimalController(animalManager, $routeParams) {

	var vm = this;
	
	//View model properties
	
	vm.animal = {};
		
	//Controller logic
	
	vm.animal = animalManager.getAnimal($routeParams.id);

};


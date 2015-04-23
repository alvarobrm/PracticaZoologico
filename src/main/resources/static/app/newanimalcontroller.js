angular.module("app").controller("NewAnimalController", NewAnimalController);

NewAnimalController.$inject = ["animalManager", "$location"];

function NewAnimalController(animalManager, $location) {

	var vm = this;
	
	//View model properties
	
	vm.newAnimal = {};
	
	//Controller actions

	vm.addAnimal = function(newAnimal) {
		
		animalManager.newAnimal(newAnimal);
		
		vm.newAnimal = {};
		
		$location.path("/");
	};
};


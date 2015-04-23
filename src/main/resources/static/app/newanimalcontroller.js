angular.module("app").controller("NewAnimalController", NewAnimalController);

NewAnimalController.$inject = ["blogManager", "$location"];

function NewAnimalController(blogManager, $location) {

	var vm = this;
	
	//View model properties
	
	vm.newAnimal = {};
	
	//Controller actions

	vm.addAnimal = function(newAnimal) {
		
		blogManager.newAnimal(newAnimal);
		
		vm.newAnimal = {};
		
		$location.path("/");
	};
};


angular.module("app").controller("AnimalController", AnimalController);

AnimalController.$inject = ["blogManager", "$routeParams"];

function AnimalController(blogManager, $routeParams) {

	var vm = this;
	
	//View model properties
	
	vm.animal = {};
		
	//Controller logic
	
	vm.animal = blogManager.getAnimal($routeParams.id);

};


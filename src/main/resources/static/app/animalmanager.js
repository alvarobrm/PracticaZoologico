angular.module("app").factory("animalManager", animalManager);

animalManager.$inject = [ "$resource", "$timeout" ];

function animalManager($resource, $timeout) {

	var AnimalResource = $resource('/animales/:id', 
			{ id : '@id'}, 
			{ update : {method : "PUT"}}
		);

		var animales = [];

		function autoreload(){
			reload();
			$timeout(autoreload, 5000);
		}
		
		autoreload();
		
		return {
			reload : reload,
			getAnimales : getAnimales,
			getAnimal : getAnimal,		
			newAnimal : newAnimal,
			updateAnimal : updateAnimal,
			deleteAnimal : deleteAnimal
		}

		function reload(){
			return AnimalResource.query(function(newanimales){
				animales.length = 0;
				animales.push.apply(animales, newanimales);
			}).$promise;
		}
		
		function getAnimales() {
			return animales;
		}

		function getAnimal(id) {
			for (var i = 0; i < animales.length; i++) {
				if (animales[i].id.toString() === id) {
					return animales[i];
				}
			}
		}

		function newAnimal(newAnimal) {
			new AnimalResource(newAnimal).$save(function(animal) {
				animales.push(animal);
			});
		}

		function updateAnimal(updatedAnimal) {
			updatedAnimal.$update();
		}

		function deleteAnimal(animal) {
			animal.$remove(function() {
				animales.splice(animales.indexOf(animal), 1);
			});
		}
}
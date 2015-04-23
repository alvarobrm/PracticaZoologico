package blog;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/animales")
public class AnimalRestController {

	@Autowired
	private AnimalRepository animalRepository;

	@RequestMapping(method = RequestMethod.GET)
	public List<Animal> allAnimales(Model model) {
		return animalRepository.findAll();
	}

	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<Animal> addAnimal(@RequestBody Animal animal) {
		animalRepository.save(animal);		
		return new ResponseEntity<>(animal,HttpStatus.CREATED);
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public void deleteAnimal(@PathVariable Integer id) {
		animalRepository.delete(id);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public Animal getAnimal(@PathVariable int id) {
		return animalRepository.findOne(id);
	}
}
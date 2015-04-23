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
@RequestMapping("/empleados")
public class AnimalRestController {

	@Autowired
	private AnimalRepository empleadoRepository;

	@RequestMapping(method = RequestMethod.GET)
	public List<Animal> allEmpleados(Model model) {
		return empleadoRepository.findAll();
	}

	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<Animal> addEmpleado(@RequestBody Animal empl) {
		empleadoRepository.save(empl);		
		return new ResponseEntity<>(empl,HttpStatus.CREATED);
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public void deleteEmpleado(@PathVariable Integer id) {
		empleadoRepository.delete(id);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public Animal getEmpleado(@PathVariable int id) {
		return empleadoRepository.findOne(id);
	}
}
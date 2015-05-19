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
@RequestMapping("/ventas")
public class VentaRestController {

	@Autowired
	private VentaRepository ventaRepository;

	@RequestMapping(method = RequestMethod.GET)
	public List<Venta> allVentas(Model model) {
		return ventaRepository.findAll();
	}

	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<Venta> addVenta(@RequestBody Venta venta) {
		ventaRepository.save(venta);		
		return new ResponseEntity<>(venta,HttpStatus.CREATED);
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public void deleteVenta(@PathVariable Integer id) {
		ventaRepository.delete(id);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public Venta getVenta(@PathVariable int id) {
		return ventaRepository.findOne(id);
	}
}
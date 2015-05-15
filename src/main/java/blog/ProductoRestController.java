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
@RequestMapping("/productos")
public class ProductoRestController {

	@Autowired
	private ProductoRepository productoRepository;

	@RequestMapping(method = RequestMethod.GET)
	public List<Producto> allProductos(Model model) {
		return productoRepository.findAll();
	}

	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<Producto> addProducto(@RequestBody Producto producto) {
		productoRepository.save(producto);		
		return new ResponseEntity<>(producto,HttpStatus.CREATED);
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public void deleteProducto(@PathVariable Integer id) {
		productoRepository.delete(id);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public Producto getProducto(@PathVariable int id) {
		return productoRepository.findOne(id);
	}
}
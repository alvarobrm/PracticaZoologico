package blog;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Venta {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private String fecha;
	private String nombre;
	private String apellidos;
	private String email;
	
	public Venta(){};
	public Venta(String fecha, String nombre, String apellidos, String email){
		this.fecha=fecha;
		this.nombre=nombre;
		this.apellidos=apellidos;
		this.email=email;
	};
}

package blog;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Producto {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private String nombre;
	private String descripcion;
	private int cantidad;
	private String precio;

	

	public Producto() {
		super();
	}



	public Producto(Integer id, int cantidad, String precio) {
		super();
		this.id = id;
		this.precio = precio;
		this.cantidad = cantidad;
	}



	public Integer getId() {
		return id;
	}



	public String getNombre() {
		return nombre;
	}



	public void setNombre(String nombre) {
		this.nombre = nombre;
	}



	public String getDescripcion() {
		return descripcion;
	}



	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}



	public int getCantidad() {
		return cantidad;
	}



	public void setCantidad(int cantidad) {
		this.cantidad = cantidad;
	}



	public void setId(Integer id) {
		this.id = id;
	}


	public String getPrecio() {
		return precio;
	}



	public void setPrecio(String precio) {
		this.precio = precio;
	}



	@Override
	public String toString() {
		return "Post [id=" + id + ", precio=" + precio + ", cantidad=" + cantidad
				+  "]";
	}
}

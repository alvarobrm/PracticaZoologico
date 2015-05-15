package blog;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Animal {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private String nombre;
	private String fechaNac;
	private String descripcion;
	private String raza;

	public Animal() {
	}

	

	public Animal(Integer id, String nombre, String fechaNac,
			String descripcion, String raza) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.fechaNac = fechaNac.substring(0,10);
		this.descripcion = descripcion;
		this.raza = raza;
	}



	public String getDescripcion() {
		return descripcion;
	}



	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}



	public String getRaza() {
		return raza;
	}



	public void setRaza(String raza) {
		this.raza = raza;
	}

	public String getFechaNac() {
		return fechaNac;
	}

	public void setFechaNac(String fechaNac) {
		this.fechaNac = fechaNac.substring(0,10);
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}


	@Override
	public String toString() {
		return "Post [id=" + id + ", name=" + nombre + ", title=" + fechaNac
				+ ", text=" + "]";
	}
}

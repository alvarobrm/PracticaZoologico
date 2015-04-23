package blog;

import java.util.GregorianCalendar;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Animal {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column
	private String nombre;
	
	@Column
	private GregorianCalendar fechaNac;

	public Animal() {
	}

	public Animal(Integer id, String nombre, GregorianCalendar fechaNac) {
		this.nombre = nombre;
		this.id = id;
		this.fechaNac = fechaNac;
	}

	public GregorianCalendar getFechaNac() {
		return fechaNac;
	}

	public void setFechaNac(GregorianCalendar fechaNac) {
		this.fechaNac = fechaNac;
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

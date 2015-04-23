package blog;

import java.util.GregorianCalendar;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Empleado {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column
	private String nombre;
	@Column
	private String apellidos;
	@Column
	private String dni;
	@Column
	private boolean administrador;
	
	
	@Column
	private GregorianCalendar fechaNac;

	public Empleado() {
	}

	public Empleado(Integer id, String nombre, String apellidos, boolean administrador, GregorianCalendar fechaNac) {
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.id = id;
		this.administrador = administrador;
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
	
	public String getApellidos() {
		return apellidos;
	}
	
	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}
	
	public String getDni() {
		return dni;
	}
	
	public void setDni(String dni) {
		this.dni = dni;
	}
	
	public void setAdministrador(boolean administrador) {
		this.administrador = administrador;
	}
	
	public GregorianCalendar getFechaNac() {
		return fechaNac;
	}
	
	public void setFechaNac(GregorianCalendar fechaNac) {
		this.fechaNac = fechaNac;
	}


	@Override
	public String toString() {
		return "Empleado [id=" + id + ", name=" + nombre + ", apellidos="+ apellidos + 
				", fecha nac=" + fechaNac + ", administrador" + administrador + "]";
	}
}
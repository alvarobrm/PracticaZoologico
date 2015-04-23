package blog;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Entrada {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column
	private long idEntrada;
	
	@Column
	private String tipoEntrada;
	@Column
	private String tipoPersona;
	@Column
	private Date fechaHora;
	@Column
	private String comentarios;
	
	public Entrada(){}
	
	public Entrada(long idEntrada, String tipoEntrada, String tipoPersona, Date fechaHora, String comentarios){
		this.idEntrada = idEntrada;
		this.tipoEntrada = tipoEntrada;
		this.tipoPersona = tipoPersona;
		this.fechaHora = fechaHora;
		this.comentarios = comentarios;
	}

	public long getIdEntrada() {
		return idEntrada;
	}

	public void setIdEntrada(long idEntrada) {
		this.idEntrada = idEntrada;
	}

	public String getTipoEntrada() {
		return tipoEntrada;
	}

	public void setTipoEntrada(String tipoEntrada) {
		this.tipoEntrada = tipoEntrada;
	}

	public String getTipoPersona() {
		return tipoPersona;
	}

	public void setTipoPersona(String tipoPersona) {
		this.tipoPersona = tipoPersona;
	}

	public Date getFechaHora() {
		return fechaHora;
	}

	public void setFechaHora(Date fechaHora) {
		this.fechaHora = fechaHora;
	}

	public String getComentarios() {
		return comentarios;
	}

	public void setComentarios(String comentarios) {
		this.comentarios = comentarios;
	}
	
}

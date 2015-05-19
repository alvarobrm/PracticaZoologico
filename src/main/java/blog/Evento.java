package blog;

import java.util.GregorianCalendar;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.stereotype.Component;
import org.springframework.web.context.WebApplicationContext;

@Component
@Scope(value = WebApplicationContext.SCOPE_SESSION, proxyMode = ScopedProxyMode.TARGET_CLASS) 

@Entity
public class Evento {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String des;
	private String tit;
	private GregorianCalendar fecha;
	   
	public Evento() {}
	
	public Evento(String des, String pass, String tit, GregorianCalendar fecha){
		this.des=des;
		this.tit=tit;
		this.fecha=fecha;	
	}

}

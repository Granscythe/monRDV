package sopra.monRdv.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Version;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;

@Entity
public class Creneau {
	@Id
	@GeneratedValue
	@JsonView(Views.ViewCommon.class)
	private Long id;
	@Version
	@JsonView(Views.ViewCommon.class)
	private int version;
	@Temporal(TemporalType.DATE)
	@JsonView(Views.ViewCommon.class)
	private Date dateCreneau;
	@Temporal(TemporalType.TIME)
	@JsonView(Views.ViewCommon.class)
	private Date heureCreneau;
	@JsonView(Views.ViewCommon.class)
	private int duree;
	@JsonView(Views.ViewCommon.class)
	private boolean dispo;
	@ManyToOne
	@JoinColumn(name = "praticien_id")
	private Praticien praticien;
	@ManyToOne
	@JoinColumn(name = "lieu_id")
	@JsonIgnore
	private Lieu lieu;
	@ManyToOne
	@JoinColumn(name = "consultation_id")
	@JsonView({Views.ViewCreneau.class,Views.ViewCreneauPatient.class})
	private Consultation consultation;

	public Creneau() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public int getVersion() {
		return version;
	}

	public void setVersion(int version) {
		this.version = version;
	}

	public Date getDateCreneau() {
		return dateCreneau;
	}

	public void setDateCreneau(Date dateCreneau) {
		this.dateCreneau = dateCreneau;
	}

	public Date getHeureCreneau() {
		return heureCreneau;
	}

	public void setHeureCreneau(Date heureCreneau) {
		this.heureCreneau = heureCreneau;
	}

	public int getDuree() {
		return duree;
	}

	public void setDuree(int duree) {
		this.duree = duree;
	}

	public boolean isDispo() {
		return dispo;
	}

	public void setDispo(boolean dispo) {
		this.dispo = dispo;
	}

	public Praticien getPraticien() {
		return praticien;
	}

	public void setPraticien(Praticien praticien) {
		this.praticien = praticien;
	}

	public Lieu getLieu() {
		return lieu;
	}

	public void setLieu(Lieu lieu) {
		this.lieu = lieu;
	}

	public Consultation getConsultation() {
		return consultation;
	}

	public void setConsultation(Consultation consultation) {
		this.consultation = consultation;
	}

}

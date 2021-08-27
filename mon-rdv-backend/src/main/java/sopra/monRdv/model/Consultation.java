package sopra.monRdv.model;

import com.fasterxml.jackson.annotation.JsonView;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Version;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;

@Entity
public class Consultation {
	@Id
	@GeneratedValue
	@JsonView(Views.ViewCommon.class)
	private Long id;
	@Version
	@JsonView(Views.ViewCommon.class)
	private int version;
	@Column(length = 15)
	@Enumerated(EnumType.STRING)
	@JsonView(Views.ViewCommon.class)
	private Statut statut;
	@JsonView(Views.ViewCommon.class)
	private int nbCreneau;
	@ManyToOne
	@JoinColumn(name = "patient_id")
	@JsonView({Views.ViewCreneau.class,Views.ViewCreneauPatient.class})
	private Patient patient;	
	@ManyToOne
	@JoinColumn(name = "praticien_id")
	@JsonView({Views.ViewPatientConsultation.class,Views.ViewCreneauPatient.class})
	private Praticien praticien;
	@ManyToOne
	@JoinColumn(name = "motif_id")
	@JsonView({Views.ViewPatientConsultation.class,Views.ViewCreneau.class,Views.ViewCreneauPatient.class})
	private Motif motif;
	@OneToMany(mappedBy = "consultation")
	@JsonView()
	private List<Creneau> creneaux = new ArrayList<Creneau>();

	public Consultation() {
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

	public Statut getStatut() {
		return statut;
	}

	public void setStatut(Statut statut) {
		this.statut = statut;
	}

	public int getNbCreneau() {
		return nbCreneau;
	}

	public void setNbCreneau(int nbCreneau) {
		this.nbCreneau = nbCreneau;
	}

	public Patient getPatient() {
		return patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}

	public Praticien getPraticien() {
		return praticien;
	}

	public void setPraticien(Praticien praticien) {
		this.praticien = praticien;
	}

	public Motif getMotif() {
		return motif;
	}

	public void setMotif(Motif motif) {
		this.motif = motif;
	}

	public List<Creneau> getCreneaux() {
		return creneaux;
	}

	public void setCreneaux(List<Creneau> creneaux) {
		this.creneaux = creneaux;
	}

}

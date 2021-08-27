package sopra.monRdv.model;

public class Views {
	public static class ViewCommon {}
	
	public static class ViewUtilisateur extends ViewCommon{}
	public static class ViewPatient extends ViewUtilisateur{}
	public static class ViewPatientConsultation extends ViewPatient{}
	
	public static class ViewConsultation extends ViewCommon{}
	
	public static class ViewCreneau extends ViewCommon{}
	public static class ViewCreneauPatient extends ViewCreneau{}
	public static class ViewCreneauPatientFutur extends ViewCreneau{}
	public static class ViewCreneauPatientPasser extends ViewCreneau{}
	
	
	

}


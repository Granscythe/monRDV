import {Utilisateur} from "./utilisateur";
import {Adresse} from "./adresse";
import {Consultation} from "./Consultation";

export class Patient extends Utilisateur {
  dateNaissance: string;
  numeroSS: string;
  telephone: string;
  consultation: Consultation;

  constructor(id?:number,version?: number, nom?: string, prenom?: string, email?: string, motDePasse?: string, adresse?: Adresse,dateNaissance?: string, numeroSS?: string, telephone?: string, consultation?: Consultation) {
    super(id, version, nom, prenom, email, motDePasse, adresse);
    this.numeroSS = numeroSS;
    this.telephone = telephone;
    this.consultation = consultation;
  }


}

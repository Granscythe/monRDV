import {Utilisateur} from "./utilisateur";
import {Adresse} from "./adresse";


export class Praticien extends Utilisateur{
  matricule: string;
  telephone: string;
  photo:string;
  convention: string;
  carteVitale: boolean;
  cb: boolean;
  cheque: boolean;
  espece: boolean;
  dureeCreneau: number;


  constructor(id?: number, version?: number, nom?: string, prenom?: string, email?: string, adresse?: Adresse, matricule?: string, telephone?: string, photo?: string, convention?: string, carteVitale?: boolean, cb?: boolean, cheque?: boolean, espece?: boolean, dureeCreneau?: number) {
    super(id, version, nom, prenom, email, adresse);
    this.matricule = matricule;
    this.telephone = telephone;
    this.photo = photo;
    this.convention = convention;
    this.carteVitale = carteVitale;
    this.cb = cb;
    this.cheque = cheque;
    this.espece = espece;
    this.dureeCreneau = dureeCreneau;
  }
}

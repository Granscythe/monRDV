import {Praticien} from "./praticien";
import {Creneau} from "./Creneau";
import {Patient} from "./patient";

export class Consultation{
  id:number;
  version:number;
  statut:string;
  nbCreneau:number;
  patient:Patient;
  praticien :Praticien;
  motif : Motif;
  crenaux:Array<Creneau>;

  constructor(id?:number,version?:number,statut?:string,
              nbCrenau?:number,patient?:Patient,praticien?:Praticien) {
    this.id=id;
    this.version=version;
    this.nbCreneau=nbCrenau;
    this.patient=patient;
    this.praticien=praticien;
  }
}

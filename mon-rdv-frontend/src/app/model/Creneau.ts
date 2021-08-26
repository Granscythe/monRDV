import {Praticien} from "./praticien";
import {Consultation} from "./Consultation";


export class Creneau{
  id:number;
  version:number;
  dateCreneau:Date;
  heureCreneau:Date;
  duree:number;
  dispo:boolean;
  praticien:Praticien;
  lieu:Lieu;
  consultation:Consultation;

  constructor(id?:number,version?:number,dateCreneau?:Date,
              heureCreneau?:Date,duree?:number,dispo?:boolean,praticien?:Praticien,
              lieu?:Lieu,consultation?:Consultation) {
    this.id=id;
    this.version=version;
    this.dateCreneau=dateCreneau;
    this.heureCreneau=heureCreneau;
    this.duree=duree;
    this.praticien=praticien;
    this.dispo=dispo;
    this.lieu=lieu;
    this.consultation=consultation;

  }
}

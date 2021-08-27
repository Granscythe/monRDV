//import {praticien} from "../model/praticien";
//import {consultation} from "../model/consultation";

export class Motif {
  id: number;
  version : number;
  libelle : string;
  nbCreneau: number;
  //praticien : praticien;
 // consultation: consultation;


  constructor(id?: number, version?: number, libelle?: string, nbCreneau?: number) {
    this.id = id;
    this.version = version;
    this.libelle = libelle;
    this.nbCreneau = nbCreneau;
  }
}

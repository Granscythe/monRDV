import {Praticien} from "./praticien";

export class Motif {
  id: number;
  version : number;
  libelle : string;
  nbCreneau: number;
  praticien : Praticien;



  constructor(id?: number, version?: number, libelle?: string, nbCreneau?: number) {
    this.id = id;
    this.version = version;
    this.libelle = libelle;
    this.nbCreneau = nbCreneau;
  }
}

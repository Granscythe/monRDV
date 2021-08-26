import {Utilisateur} from "./utilisateur";
import {Adresse} from "./adresse";
import {Praticien} from "./praticien";

export class Lieu{
  id: number;
  version: number;
  nom:string;
  virtuel: boolean;
  adr: Adresse;
  praticien: Praticien;
  // creneau: Creneau;

  constructor(id?: number, version?: number, nom?: string, virtuel?: boolean, adr?: Adresse, praticien?: Praticien) {

    this.id = id;
    this.version = version;
    this.nom = nom;
    this.virtuel = virtuel;
    this.adr = adr;
    this.praticien = praticien;
  }
}

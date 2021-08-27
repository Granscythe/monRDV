import {Creneau} from "./Creneau";
import {Praticien} from "./praticien";
import {Observable} from "rxjs";

export class PlanningDTO {

  praticien: Praticien;
  creneaux: Array<Creneau>;

  constructor(praticien?: Praticien, creneaux?: Array<Creneau>) {
    this.praticien = praticien;
    this.creneaux = creneaux;
  }
}

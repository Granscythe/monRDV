import { Injectable } from '@angular/core';
import {Motif} from "../../model/motif";


@Injectable({
  providedIn: 'root'
})
export class MotifService {

  motifs: Array<Motif> = new Array<Motif>();

  constructor() {
  this.motifs.push(new Motif(1,0,"Kinésitérapie",3));
  this.motifs.push(new Motif(2,0,"Medecin généraliste",6));
  this.motifs.push(new Motif(1,0,"Cardiologie",3));

  }
  findAll(): Array<Motif> {
    return this.motifs;
  }

  findById(id: number):Motif{
    return this.motifs.find(motif =>motif.id == id);

  }
  create(motif:Motif) {
    let max = 0;
    for (let current of this.motifs) {
      if (max < current.id) {
        max = current.id;
      }
    }
    motif.id = ++max;
    motif.version = 0;

    this.motifs.push(motif);
  }
  modify(motif:Motif) {
    let find: boolean = false;
    for (var indice = 0; indice < this.motifs.length; indice++) {
      if (this.motifs[indice].id == motif.id) {
        find = true;
        break;
      }
    }
    if (find) {
      motif.version++;
      this.motifs[indice] = motif;
    }
  }

  deleteById(id: number) {
    let find: boolean = false;
    for (var indice = 0; indice < this.motifs.length; indice++) {
      if (this.motifs[indice].id == id) {
        find = true;
        break;
      }
    }
    if (find) {
      this.motifs.splice(indice, 1);
    }
  }
}

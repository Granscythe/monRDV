import { Component, OnInit } from '@angular/core';
import {Motif} from "../../model/motif";
import {MotifHttpService} from "./motifHttp.service";
import {Praticien} from "../../model/praticien";

@Component({
  selector: 'motif',
  templateUrl: './motif.component.html',
  styleUrls: ['./motif.component.scss']
})
export class MotifComponent implements OnInit {
  motifForm: Motif = null;

  constructor(private motifService : MotifHttpService ) { }

  ngOnInit(): void {
  }

  list(): Array<Motif> {
    return this.motifService.findAll();
  }
 // listPraticien(): Array<Praticien> {
   // return this.praticienService.findAll();

 // }
 // listConsulation(): Array<Consultation> {
  //  return this.consultationService.findAll();
 // }

  add() {
    this.motifForm = new Motif();
   // this.motifForm.praticien = new Praticien();
    //this.motifForm.consultation = new Consultation();

  }

  edit(id: number) {
    this.motifService.findById(id).subscribe(resp => {
      this.motifForm = resp;
     // if (!this.motifForm.praticien) {
       // this.motifForm.praticien = new Praticien();
      //}
      //if (!this.motifForm.consultation) {
        //this.motifForm.consultation = new Consultation();
     // }
      console.log("motifForm : "+this.motifForm)
      //console.log("motifForm.filiere : "+this.motifForm.praticien)
      //console.log("motifForm.filiere : "+this.motifForm.consultation)
    })
  }

  save() {
    console.log(this.motifForm);
    if (!this.motifForm.id) {
      this.motifService.create(this.motifForm);
    } else {
      this.motifService.modify(this.motifForm);
    }
    this.motifForm = null;
  }
  cancel() {
    this.motifForm = null;
  }

  delete(id: number) {
    this.motifService.deleteById(id).subscribe(resp => {
      this.motifService.load();
    }, error => console.log(error));
  }

}



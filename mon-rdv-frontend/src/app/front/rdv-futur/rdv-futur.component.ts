import { Component, OnInit } from '@angular/core';
import {RdvFuturHttpService} from "./rdv-futur-http.service";
import {Consultation} from "../../model/Consultation";
import {ConsultationHttpService} from "../consultation/consultation-http.service";
import {Patient} from "../../model/patient";
import {Creneau} from "../../model/Creneau";
import {CreneauHttpService} from "../creneau/creneau-http.service";

@Component({
  selector: 'rdv-futur',
  templateUrl: './rdv-futur.component.html',
  styleUrls: ['./rdv-futur.component.scss']
})
export class RdvFuturComponent implements OnInit {

  consultations:Array<Consultation>=new  Array<Consultation>();
  crenauxFutur:Array<Creneau>=new Array<Creneau>();
  crenaux: Array<Creneau> = new Array<Creneau>();
  patient: Patient;


  constructor(private rdvFuturService:RdvFuturHttpService,private creneauService:CreneauHttpService ) { }

  ngOnInit(): void {this.listCreneauFutur(2);

  }

  listCreneauFutur(id:number) {
    this.creneauService.findAllByIdPatientFutur(id).subscribe(resp => {
      this.crenauxFutur = resp;
    });
  }


  delete(id: number) {
    this.creneauService.deleteById(id).subscribe(resp=>{
       this.creneauService.load();}
    ,error => console.log());
  }
}

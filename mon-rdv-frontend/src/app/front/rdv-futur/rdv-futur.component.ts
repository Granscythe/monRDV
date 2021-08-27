import { Component, OnInit } from '@angular/core';
import {RdvFuturHttpService} from "./rdv-futur-http.service";
import {Consultation} from "../../model/Consultation";
import {ConsultationHttpService} from "../consultation/consultation-http.service";

@Component({
  selector: 'rdv-futur',
  templateUrl: './rdv-futur.component.html',
  styleUrls: ['./rdv-futur.component.scss']
})
export class RdvFuturComponent implements OnInit {


  constructor(private rdvFuturService:RdvFuturHttpService,private consultationService:ConsultationHttpService ) { }

  ngOnInit(): void {
  }

  listConsultation(id:number):Array<Consultation>{
    return this.consultationService.findAllById(id);
  }

}

import { Component, OnInit } from '@angular/core';
import {ValidationRdvHttpService} from "./validationRdvHttp.service";
import {Patient} from "../../model/patient";
import {PatientHttpService} from "../patient/patient-http.service";

@Component({
  selector: 'validationRdv',
  templateUrl: './validationRdv.component.html',
  styleUrls: ['./validationRdv.component.scss']
})
export class ValidationRdvComponent implements OnInit {


  constructor(private patientService: PatientHttpService) {
  }

  ngOnInit(): void {
  }

  listPatient(): Array<Patient> {
    return this.patientService.findAll();
  }

  add() {
    this.validationForm = new ValidationRdv();
  }

  edit(id: number) {
    this.validationService.findById(id).subscribe(resp => {
      this.validationForm = resp;
    })
  }

  save() {
    if (this.validationForm.id) {
      this.validationService.modify(this.validationForm);
    } else {
      this.validationService.create(this.validationForm);
    }

    this.validationForm = null;
  }

  // pour l'exemple => mais de préférence coder le subscribe dans le service
  delete(id: number) {
    this.validationService.deleteById(id).subscribe(resp => {
      this.validationService.load();
    }, error => console.log(error));
  }

  cancel() {
    this.validationForm = null;
  }
}

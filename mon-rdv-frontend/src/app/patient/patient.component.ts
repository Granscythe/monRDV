import {Component, OnInit} from '@angular/core';
import {Patient} from "../model/patient";
import {PatientHttpService} from "./patient-http.service";


@Component({
  selector: 'patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class patientComponent implements OnInit {

  patientForm: Patient = null;

  constructor(private patientService: PatientHttpService) {
  }

  ngOnInit(): void {
  }

  list(): Array<Patient> {
    return this.patientService.findAll();
  }

  add() {
    this.patientForm = new Patient();
  }

  edit(id: number) {
    this.patientService.findById(id).subscribe(resp => {
      this.patientForm = resp;
    })
  }

  save() {
    if (this.patientForm.id) {
      this.patientService.modify(this.patientForm);
    } else {
      this.patientService.create(this.patientForm);
    }
    this.patientForm = null;
  }

  cancel() {
    this.patientForm = null;
  }
  delete(id: number) {
    this.patientService.deleteById(id).subscribe(resp => {
      this.patientService.load();
    }, error => console.log(error));
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AppConfigService} from "../../app-config.service";
import {Patient} from "../../model/patient";


@Injectable({
  providedIn: 'root'
})
export class PatientHttpService {

  patients: Array<Patient> = new Array<Patient>();

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    this.load();
  }

  findAll(): Array<Patient> {
    return this.patients;
  }

  findById(id: number): Observable<Patient> {
    return this.http.get<Patient>(this.appConfigService.backEndUrl + "patient/" + id);
  }

  findByIdConsultation(id: number): Observable<Patient> {
    return this.http.get<Patient>(this.appConfigService.backEndUrl + "patient/" + id+"/consultation/");
  }


  create(patient: Patient) {
    this.http.post<Patient>(this.appConfigService.backEndUrl + "patient/", patient).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  modify(patient: Patient) {
    this.http.put<Patient>(this.appConfigService.backEndUrl + "patient/" + patient.id, patient).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(this.appConfigService.backEndUrl + "patient/" + id);
  }

  load() {
    this.http.get<Array<Patient>>(this.appConfigService.backEndUrl + "patient/").subscribe(response => {
      this.patients = response;
    }, error => console.log(error));
  }
}

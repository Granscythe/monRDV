import { Injectable } from '@angular/core';
import {Consultation} from "../../model/Consultation";
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "../../app-config.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConsultationHttpService {

  consultations: Array<Consultation> = new Array<Consultation>();
  chemin:string;

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    this.load();
    this.chemin=this.appConfigService.backEndUrl + "consultation/"
  }

  findAll(): Array<Consultation> {
    return this.consultations;
  }

  findById(id: number): Observable<Consultation> {
    return this.http.get<Consultation>(this.chemin+ id);
  }


  create(consultation: Consultation) {
    this.http.post<Consultation>(this.chemin, consultation).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  modify(consultation: Consultation) {
    this.http.put<Consultation>(this.chemin + consultation.id, consultation).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(this.chemin+ id);
  }

  load() {
    this.http.get<Array<Consultation>>(this.chemin).subscribe(response => {
      this.consultations = response;
    }, error => console.log(error));
  }
}

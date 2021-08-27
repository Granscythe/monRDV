import { Injectable } from '@angular/core';
import {Creneau} from "../../model/Creneau";
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "../../app-config.service";
import {Patient} from "../../model/patient";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CreneauHttpService {
  creneaux:Array<Creneau>=new Array<Creneau>();
  chemin:string;

  constructor(private http:HttpClient,private appConfig:AppConfigService) {
    this.load;
    this.chemin=this.appConfig.backEndUrl+"creneau/";
  }

  findAll(): Array<Creneau> {
    return this.creneaux;
  }

  findById(id: number): Observable<Creneau> {
    return this.http.get<Creneau>(this.chemin + id);
  }

  findAllByIdPatientFutur(id:number):Observable<Array<Creneau>>{
    return this.http.get<Array<Creneau>>(this.chemin+"patient/"+id+"/futur/");
  }

  findAllByIdPatientPasser(id:number):Observable<Array<Creneau>>{
    return this.http.get<Array<Creneau>>(this.chemin+"patient/"+id+"/passer/");
  }

  create(creneau: Creneau) {
    this.http.post<Creneau>(this.chemin, creneau).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  modify(creneau: Creneau) {
    this.http.put<Creneau>(this.chemin + creneau.id, creneau).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(this.chemin + id);
  }

  load() {
    this.http.get<Array<Creneau>>(this.chemin).subscribe(response => {
      this.creneaux = response;
    }, error => console.log(error));
  }
}

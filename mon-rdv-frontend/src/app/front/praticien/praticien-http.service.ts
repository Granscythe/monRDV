import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Praticien} from "../../model/praticien";
import {AppConfigService} from "../../app-config.service";



@Injectable({
  providedIn: 'root'
})
export class PraticienHttpService {

  praticiens: Array<Praticien> = new Array<Praticien>();

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    this.load();
  }

  findAll(): Array<Praticien> {
    return this.praticiens;
  }

  findById(id: number): Observable<Praticien> {
    return this.http.get<Praticien>(this.appConfigService.backEndUrl + "praticien/" + id);
  }

  findByIdConsultation(id: number): Observable<Praticien> {
    return this.http.get<Praticien>(this.appConfigService.backEndUrl + "praticien/" + id+"/consultation/");
  }


  create(praticien: Praticien) {
    this.http.post<Praticien>(this.appConfigService.backEndUrl + "praticien/", praticien).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  modify(praticien: Praticien) {
    this.http.put<Praticien>(this.appConfigService.backEndUrl + "praticien/" + praticien.id, praticien).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(this.appConfigService.backEndUrl + "praticien/" + id);
  }

  load() {
    this.http.get<Array<Praticien>>(this.appConfigService.backEndUrl + "praticien/").subscribe(response => {
      this.praticiens = response;
    }, error => console.log(error));
  }
}

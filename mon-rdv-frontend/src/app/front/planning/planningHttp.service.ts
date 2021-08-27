import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "../../app-config.service";
import {Creneau} from "../../model/Creneau";
import {Observable} from "rxjs";
import {Praticien} from "../../model/praticien";


@Injectable({
  providedIn: 'root'
})
export class PlanningHttpService {

  praticien: Praticien;
  creneaux: Array<Creneau> = new Array<Creneau>();

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    this.load();
  }

  findAllByPraticienId(id: number): Observable<Array<Creneau>> {
    return this.http.get<Array<Creneau>>(this.appConfigService.backEndUrl + "praticien/" + id+"/creneaux");
  }

  load() {
    this.http.get<Array<Creneau>>(this.appConfigService.backEndUrl + "creneau/").subscribe(response => {
      this.creneaux = response;
    }, error => console.log(error));
  }
}

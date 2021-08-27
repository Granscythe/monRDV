import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "../../app-config.service";
import {Creneau} from "../../model/Creneau";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class PlanningHttpService {

  creneaux: Array<Creneau> = new Array<Creneau>();

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    this.load();
  }

  findAllByPraticienId(id: number): Observable<Creneau> {
    return this.http.get<Creneau>(this.appConfigService.backEndUrl + "praticien/" + id+"/creneaux");
  }

  load() {
    this.http.get<Array<Creneau>>(this.appConfigService.backEndUrl + "creneau/").subscribe(response => {
      this.creneaux = response;
    }, error => console.log(error));
  }
}

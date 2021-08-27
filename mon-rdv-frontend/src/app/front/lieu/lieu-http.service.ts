import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AppConfigService} from "../../app-config.service";
import {Lieu} from "../../model/lieu";


@Injectable({
  providedIn: 'root'
})
export class LieuHttpService {

  lieus: Array<Lieu> = new Array<Lieu>();

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    this.load();
  }

  findAll(): Array<Lieu> {
    return this.lieus;
  }

  findById(id: number): Observable<Lieu> {
    return this.http.get<Lieu>(this.appConfigService.backEndUrl + "lieu/" + id);
  }

  create(lieu: Lieu) {
    this.http.post<Lieu>(this.appConfigService.backEndUrl + "lieu/", lieu).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  modify(lieu: Lieu) {
    this.http.put<Lieu>(this.appConfigService.backEndUrl + "lieu/" + lieu.id, lieu).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(this.appConfigService.backEndUrl + "lieu/" + id);
  }

  load() {
    this.http.get<Array<Lieu>>(this.appConfigService.backEndUrl + "lieu/").subscribe(response => {
      this.lieus = response;
    }, error => console.log(error));
  }
}

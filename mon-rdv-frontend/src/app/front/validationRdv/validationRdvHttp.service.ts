// import { Injectable } from '@angular/core';
// import {Observable} from "rxjs";
// import {AppConfigService} from "../../app-config.service";
// import {HttpClient} from "@angular/common/http";
//
// @Injectable({
//   providedIn: 'root'
// })
// export class ValidationRdvHttpService {
//   validationRdvs: Array<ValidationRdv> = new Array<ValidationRdv>();
//
//   constructor(private http: HttpClient, private appConfigService: AppConfigService) {
//     this.load();
//   }
//
//   findAll(): Array<ValidationRdv> {
//     return this.validationRdvs;
//   }
//
//   findById(id: number): Observable<ValidationRdv> {
//     return this.http.get<ValidationRdv>(this.appConfigService.backEndUrl + "validationRdv/" + id);
//   }
//
//   create(validationRdv: ValidationRdv) {
//     this.http.post<ValidationRdv>(this.appConfigService.backEndUrl + "validationRdv/", validationRdv).subscribe(response => {
//       this.load();
//     }, error => console.log(error));
//   }
//
//   modify(validationRdv: ValidationRdv) {
//     this.http.put<ValidationRdv>(this.appConfigService.backEndUrl + "validationRdv/" + validationRdv.id, validationRdv).subscribe(response => {
//       this.load();
//     }, error => console.log(error));
//   }
//
//   deleteById(id: number): Observable<void> {
//     return this.http.delete<void>(this.appConfigService.backEndUrl + "validationRdv/" + id);
//   }
//
//   load() {
//     this.http.get<Array<ValidationRdv>>(this.appConfigService.backEndUrl + "validationRdv/").subscribe(response => {
//       this.validationRdvs = response;
//     }, error => console.log(error));
//   }
// }

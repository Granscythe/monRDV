import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "../../app-config.service";

@Injectable({
  providedIn: 'root'
})
export class RdvFuturHttpService {
  constructor(private http:HttpClient,private appConfigService:AppConfigService ) {

  }
}

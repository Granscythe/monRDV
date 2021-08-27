import { Component, OnInit } from '@angular/core';
import {AccueilHttpService} from "./accueilHttp.service";
import {Praticien} from "../../model/praticien";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {


  constructor(private accueilService : AccueilHttpService) {
  // private praticienService
  }

  ngOnInit(): void {
  }


  // findAll(){
  //   this.praticienService.findAllPraticienBySpecialite();
  // }
  //
  // list(): Array<Praticien> {
  // return this.praticienService.praticien;
  // }

  // cancel() {
  //   this.accueilForm = null:
  // }

}

import { Component, OnInit } from '@angular/core';
import {AccueilHttpService} from "./accueilHttp.service";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  accueilForm: Accueil = null;

  constructor(private accueilService : AccueilHttpService) {

  }

  ngOnInit(): void {
  }

  list(): Array<Praticien> {
  return this.accueilService.findbySpec();
  }

  cancel() {
    this.accueilForm = null:
  }

}

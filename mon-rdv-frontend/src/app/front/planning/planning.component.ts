import { Component, OnInit } from '@angular/core';
import {PlanningDTO} from "../../model/planningDTO";
import {PlanningHttpService} from "./planningHttp.service";
import {ActivatedRoute} from "@angular/router";
import {PraticienHttpService} from "../praticien/praticienHttp.service";
import {Praticien} from "../../model/praticien";
import {Creneau} from "../../model/Creneau";

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {

  PlanningForm: PlanningDTO = new PlanningDTO(new Praticien(),new Array<Creneau>());
  id: number;
  today = new Date();
  date = this.today.getFullYear()+'-'+(this.today.getMonth()+1)+'-'+this.today.getDate();

  constructor(private route: ActivatedRoute, private planningService: PlanningHttpService, private praticienService: PraticienHttpService) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id=params.id;
      this.praticienService.findById(params.id).subscribe( resp => {
        this.PlanningForm.praticien=resp;
        this.planningService.findAllByPraticienId(this.id).subscribe(cren => {
          this.PlanningForm.creneaux=cren;
        })
      })
    })
  }



  dureeUnitaire(): number {
      return this.PlanningForm.praticien.dureeCreneau;
  }

  listCreneauxJour(jour: number): Array<Creneau>{
    let cren = new Array<Creneau>();

    for (let i of this.PlanningForm.creneaux) {
      if (new Date(i.dateCreneau.toString()).getDate() == jour) {
        cren.push(i);
      }
    }
    return cren;
  }

}

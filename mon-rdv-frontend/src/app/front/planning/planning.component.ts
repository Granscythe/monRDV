import { Component, OnInit } from '@angular/core';
import {PlanningDTO} from "../../model/planningDTO";
import {PlanningHttpService} from "./planningHttp.service";

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {

  PlanningForm: PlanningDTO = null;

  constructor(private planningService: PlanningHttpService) { }

  ngOnInit(): void {
  }

listCreneaux() {
    return this.planningService.findAllByPraticienId()
}

}

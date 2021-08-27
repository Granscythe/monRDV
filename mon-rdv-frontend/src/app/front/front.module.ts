import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanningComponent } from './planning/planning.component';
import {RdvFuturComponent} from "./rdv-futur/rdv-futur.component";
import {ConsultationComponent} from "./consultation/consultation.component";
import {ValidationRdvComponent} from "./validationRdv/validationRdv.component";



@NgModule({
  declarations: [
    PlanningComponent,
    RdvFuturComponent,
    ConsultationComponent
    ValidationRdvComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class FrontModule { }

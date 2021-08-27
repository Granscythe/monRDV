import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanningComponent } from './planning/planning.component';
import {RdvFuturComponent} from "./rdv-futur/rdv-futur.component";
import {ConsultationComponent} from "./consultation/consultation.component";
import {ValidationRdvComponent} from "./validationRdv/validationRdv.component";
import { CreneauComponent } from './creneau/creneau.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    PlanningComponent,
    RdvFuturComponent,
    ConsultationComponent,
    CreneauComponent,
    ValidationRdvComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class FrontModule { }

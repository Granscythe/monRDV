import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanningComponent } from './planning/planning.component';
import {RdvFuturComponent} from "./rdv-futur/rdv-futur.component";
import {ConsultationComponent} from "./consultation/consultation.component";
import { CreneauComponent } from './creneau/creneau.component';
import {AppModule} from "../app.module";
import { RdvPasserComponent } from './rdv-passer/rdv-passer.component';
import {StatutCatePipe} from "./statut-cate.pipe";



@NgModule({
  declarations: [
    PlanningComponent,
    RdvFuturComponent,
    ConsultationComponent,
    CreneauComponent,
    RdvPasserComponent,
    StatutCatePipe
  ],
  imports: [
    CommonModule
  ]
})


export class FrontModule { }

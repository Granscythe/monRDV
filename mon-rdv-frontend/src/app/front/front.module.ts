import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanningComponent } from './planning/planning.component';
import {RdvFuturComponent} from "./rdv-futur/rdv-futur.component";
import {ConsultationComponent} from "./consultation/consultation.component";
import {ValidationRdvComponent} from "./validationRdv/validationRdv.component";
import { CreneauComponent } from './creneau/creneau.component';
import { RdvPasserComponent } from './rdv-passer/rdv-passer.component';
import {StatutCatePipe} from "./statut-cate.pipe";
import {PatientComponent} from "./patient/patient.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {PraticienComponent} from "./praticien/praticien.component";
import {FormsModule} from "@angular/forms";
import {LieuComponent} from "./lieu/lieu.component";



@NgModule({
  declarations: [
    PlanningComponent,
    RdvFuturComponent,
    ConsultationComponent,
    CreneauComponent,
    PatientComponent,
    LieuComponent,
    AccueilComponent,
    PraticienComponent,
    RdvPasserComponent,
    StatutCatePipe
    ValidationRdvComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})


export class FrontModule { }

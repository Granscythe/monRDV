import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import {EvaluationService} from "./evaluation/evaluation.service";
import { AccueilComponent } from './accueil/accueil.component';
import {FormsModule} from "@angular/forms";
import {StagiaireComponent} from "./stagiaire/stagiaire.component";
import {StagiaireService} from "./stagiaire/stagiaire.service";
import {AgePipe} from "./age.pipe";
import {FiliereComponent} from "./filiere/filiere.component";
import {FiliereService} from "./filiere/filiere.service";
import {HttpClientModule} from "@angular/common/http";
import {MatiereComponent} from "./matiere/matiere.component";
import {FormateurComponent} from "./formateur/formateur.component";
import {UeComponent} from "./ue/ue.component";
import {FrontModule} from "./front/front.module";
import { PreticienComponent } from './preticien/preticien.component';
import { PatientComponent } from './patient/patient.component';

@NgModule({
  declarations: [
    AppComponent,
    PreticienComponent,
    PatientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FrontModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

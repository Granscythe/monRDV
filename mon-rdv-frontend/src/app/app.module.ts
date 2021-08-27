import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {FrontModule} from "./front/front.module";
import { PatientComponent } from './patient/patient.component';
import { LieuComponent } from './lieu/lieu.component';
import { AccueilComponent } from './front/accueil/accueil.component';
import { PraticienComponent } from './praticien/praticien.component';

import { MotifComponent } from './front/motif/motif.component';
import {MotifService} from "./front/motif/motif.service";
import {AppConfigService} from "./app-config.service";

@NgModule({
  declarations: [
    AppComponent,
    MotifComponent,

    PatientComponent,
    LieuComponent,
    AccueilComponent,
    PraticienComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [AppConfigService,MotifService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {FrontModule} from "./front/front.module";
import { AccueilComponent } from './front/accueil/accueil.component';
import { PraticienComponent } from './front/praticien/praticien.component';
import { PatientComponent } from './front/patient/patient.component';
import { LieuComponent } from './front/lieu/lieu.component';
import { PraticienComponent } from './praticien/praticien.component';

@NgModule({
  declarations: [
    AppComponent,
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
    FrontModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

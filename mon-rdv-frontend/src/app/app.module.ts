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
import { PraticienComponent } from './front/praticien/praticien.component';
import {AgePipe} from "./age.pipe";

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    LieuComponent,
    AccueilComponent,
    PraticienComponent,
    AgePipe
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

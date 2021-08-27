import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {FrontModule} from "./front/front.module";
import { ConsultationComponent } from './front/consultation/consultation.component';
import { PatientComponent } from './patient/patient.component';
import { LieuComponent } from './lieu/lieu.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsultationComponent,
    PatientComponent,
    LieuComponent,
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

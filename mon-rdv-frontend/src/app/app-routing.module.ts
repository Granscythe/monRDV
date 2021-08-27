import {Component, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PatientComponent} from "./front/patient/patient.component";
import {LieuComponent} from "./front/lieu/lieu.component";
import {RdvFuturComponent} from "./front/rdv-futur/rdv-futur.component";
import {PraticienComponent} from "./front/praticien/praticien.component";




const routes: Routes = [
  {path: "rdvFutur", component: RdvFuturComponent},
  {path: "praticien", component: PraticienComponent},
  {path: "patient", component: PatientComponent},
  {path: "lieu", component: LieuComponent},
  // {path: "consultation", component: ConsultationComponent},
  // {path: "planning", component: PlanningComponent},
  {path: "rdv-Futur", component: RdvFuturComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

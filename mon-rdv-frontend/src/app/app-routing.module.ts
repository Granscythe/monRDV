import {Component, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// import {PraticienComponent} from "./front/praticien/praticien.component";
import {PatientComponent} from "./front/patient/patient.component";
import {LieuComponent} from "./front/lieu/lieu.component";
import {RdvFuturComponent} from "./front/rdv-futur/rdv-futur.component";
import {PlanningComponent} from "./front/planning/planning.component";
import {AccueilComponent} from "./front/accueil/accueil.component";
import {ConsultationComponent} from "./front/consultation/consultation.component";


const routes: Routes = [
  {path: "rdvFutur", component: RdvFuturComponent},
  // {path: "praticien", component: PraticienComponent},
  {path: "patient", component: PatientComponent},
  {path: "lieu", component: LieuComponent},
  {path: "accueil", component: AccueilComponent},
  {path: "", redirectTo: "accueil", pathMatch: "full"},
  {path: "planning", component: PlanningComponent},
  {path: "rdv-Futur", component: RdvFuturComponent},
  {path: "consultation", component: ConsultationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

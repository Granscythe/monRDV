import {Component, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// import {PraticienComponent} from "./front/praticien/praticien.component";
import {PatientComponent} from "./front/patient/patient.component";
import {LieuComponent} from "./front/lieu/lieu.component";
import {RdvFuturComponent} from "./front/rdv-futur/rdv-futur.component";
import {ConsultationComponent} from "./front/consultation/consultation.component";
import {PlanningComponent} from "./front/planning/planning.component";
import {ValidationRdvComponent} from "./front/validationRdv/validationRdv.component";


const routes: Routes = [
  {path: "rdvFutur", component: RdvFuturComponent},
  // {path: "praticien", component: PraticienComponent},
  {path: "patient", component: PatientComponent},
  {path: "lieu", component: LieuComponent},
  {path: "consultation", component: ConsultationComponent},
  {path: "planning", component: PlanningComponent},
  {path: "rdv-Futur", component: RdvFuturComponent},


  {path: "accueil", component: AccueilComponent},
  {path: "validationRdv", component: ValidationRdvComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

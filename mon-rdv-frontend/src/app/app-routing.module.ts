import {Component, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccueilComponent} from "./front/accueil/accueil.component";
// import {PraticienComponent} from "./praticien/praticien.component";
import {PatientComponent} from "./patient/patient.component";
import {LieuComponent} from "./lieu/lieu.component";
import {RdvFuturComponent} from "./front/rdv-futur/rdv-futur.component";
import {PlanningComponent} from "./front/planning/planning.component";


const routes: Routes = [
  {path: "rdvFutur", component: RdvFuturComponent},
  // {path: "praticien", component: PraticienComponent},
  {path: "patient", component: PatientComponent},
  {path: "lieu", component: LieuComponent},
  {path: "accueil", component: AccueilComponent},
  {path: "", redirectTo: "accueil", pathMatch: "full"}
  // {path: "accueil", component: AccueilComponent},
  {path: "planning", component: PlanningComponent},
  // {path: "", redirectTo: "accueil", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

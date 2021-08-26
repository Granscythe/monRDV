import {Component, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// import {PraticienComponent} from "./praticien/praticien.component";
import {PatientComponent} from "./patient/patient.component";
import {LieuComponent} from "./lieu/lieu.component";


const routes: Routes = [
  // {path: "accueil", component: AccueilComponent},
  // {path: "", redirectTo: "accueil", pathMatch: "full"}
  // {path: "praticien", component: PraticienComponent},
  {path: "patient", component: PatientComponent},
  {path: "lieu", component: LieuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

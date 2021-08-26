import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlanningComponent} from "./front/planning/planning.component";


const routes: Routes = [
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

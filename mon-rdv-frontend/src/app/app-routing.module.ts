import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RdvFuturComponent} from "./front/rdv-futur/rdv-futur.component";


const routes: Routes = [
  {path: "rdvFutur", component: RdvFuturComponent},
  // {path: "", redirectTo: "accueil", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

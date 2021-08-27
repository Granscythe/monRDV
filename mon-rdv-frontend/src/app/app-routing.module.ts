import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ValidationRdvComponent} from "./front/validationRdv/validationRdv.component";


const routes: Routes = [
  // {path: "accueil", component: AccueilComponent},
  {path: "validationRdv", component: ValidationRdvComponent},
  {path: "", redirectTo: "accueil", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

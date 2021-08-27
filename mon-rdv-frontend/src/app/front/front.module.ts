import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanningComponent } from './planning/planning.component';
import {ValidationRdvComponent} from "./validationRdv/validationRdv.component";



@NgModule({
  declarations: [
    PlanningComponent,
    ValidationRdvComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class FrontModule { }

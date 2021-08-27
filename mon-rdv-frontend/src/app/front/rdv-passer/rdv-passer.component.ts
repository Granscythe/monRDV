import { Component, OnInit } from '@angular/core';
import {Creneau} from "../../model/Creneau";
import {CreneauHttpService} from "../creneau/creneau-http.service";

@Component({
  selector: 'rdv-passer',
  templateUrl: './rdv-passer.component.html',
  styleUrls: ['./rdv-passer.component.scss']
})
export class RdvPasserComponent implements OnInit {
  crenauxPasser:Array<Creneau>=new Array<Creneau>();
  constructor(private creneauService:CreneauHttpService ) { }

  ngOnInit(): void {
    this.listCreneauPasser(2);
  }

  listCreneauPasser(id:number){
    this.creneauService.findAllByIdPatientPasser(id).subscribe(resp=>{
      this.crenauxPasser=resp;
    });
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {Praticien} from "../../model/praticien";
import {PraticienHttpService} from "../praticien/praticien-http.service";
import {ActivatedRoute} from "@angular/router";
import {Praticien} from "../../model/praticien";
import {CreneauHttpService} from "../creneau/creneau-http.service";
import {Consultation} from "../../model/Consultation";
import {Motif} from "../../model/motif";

@Component({
  selector: 'validationRdv',
  templateUrl: './validationRdv.component.html',
  styleUrls: ['./validationRdv.component.scss']
})
export class ValidationRdvComponent implements OnInit {
  @Input()
  id: number;

  private parametreid: any;
  praticien: Praticien;




  civilites: Array<String> = new Array<String>();
  motifForm: Motif = null;
  consultationForm: Consultation = null;
  constructor(private route: ActivatedRoute, private praticienService: PraticienHttpService, private motif : MotifHttpService, private creneau : CreneauHttpService) {
  }

  ngOnInit() {
    this.parametreid = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
  }

  listPraticien(): Array<Praticien> {
    return this.praticienService.findAll();
  }
}

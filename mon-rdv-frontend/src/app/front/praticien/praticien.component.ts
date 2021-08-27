import {Component, OnInit} from '@angular/core';
import {PraticienHttpService} from "./praticien-http.service";
import {Praticien} from "../../model/praticien";


@Component({
  selector: 'praticien',
  templateUrl: './praticien.component.html',
  styleUrls: ['./praticien.component.scss']
})
export class PraticienComponent implements OnInit {

  praticienForm: Praticien = null;

  constructor(private praticienService: PraticienHttpService) {
  }

  ngOnInit(): void {
  }

  list(): Array<Praticien> {
    return this.praticienService.findAll();
  }

  add() {
    this.praticienForm = new Praticien();
  }

  edit(id: number) {
    this.praticienService.findById(id).subscribe(resp => {
      this.praticienForm = resp;
    })
  }

  save() {
    if (this.praticienForm.id) {
      this.praticienService.modify(this.praticienForm);
    } else {
      this.praticienService.create(this.praticienForm);
    }
    this.praticienForm = null;
  }

  cancel() {
    this.praticienForm = null;
  }
  delete(id: number) {
    this.praticienService.deleteById(id).subscribe(resp => {
      this.praticienService.load();
    }, error => console.log(error));
  }
}

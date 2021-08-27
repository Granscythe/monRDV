import {Component, OnInit} from '@angular/core';
import {Patient} from "../model/patient";
import {LieuHttpService} from "./lieu-http.service";
import {Lieu} from "../model/lieu";


@Component({
  selector: 'lieu',
  templateUrl: './lieu.component.html',
  styleUrls: ['./lieu.component.scss']
})
export class LieuComponent implements OnInit {

  lieuForm: Lieu = null;

  constructor(private lieuService: LieuHttpService) {
  }

  ngOnInit(): void {
  }

  list(): Array<Lieu> {
    return this.lieuService.findAll();
  }

  add() {
    this.lieuForm = new Lieu();
  }

  edit(id: number) {
    this.lieuService.findById(id).subscribe(resp => {
      this.lieuForm = resp;
    })
  }

  save() {
    if (this.lieuForm.id) {
      this.lieuService.modify(this.lieuForm);
    } else {
      this.lieuService.create(this.lieuForm);
    }
    this.lieuForm = null;
  }

  cancel() {
    this.lieuForm = null;
  }
  delete(id: number) {
    this.lieuService.deleteById(id).subscribe(resp => {
      this.lieuService.load();
    }, error => console.log(error));
  }
}

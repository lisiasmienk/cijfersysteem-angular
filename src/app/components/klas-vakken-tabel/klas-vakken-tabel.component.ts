import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VakDto } from '../../models/VakDto';
import { VakService } from '../../service/vak.service';
import { DocentVakService } from '../../service/docent-vak.service';
import { DocentVakDto } from '../../models/DocentVakDto';
import { DocentService } from '../../service/docent.service';

@Component({
  selector: 'app-klas-vakken-tabel',
  templateUrl: './klas-vakken-tabel.component.html',
  styleUrls: ['./klas-vakken-tabel.component.css']
})
export class KlasVakkenTabelComponent implements OnInit {

  vakken: VakDto[];
  docentvak: DocentVakDto = {
    id: undefined,
    docentid: undefined,
    vakid: undefined
  }

  constructor(private dvs: DocentVakService, private vs: VakService, private ds: DocentService, private activatedrouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.maakDocentVakkenDropDown();
    this.activatedrouter.paramMap.subscribe(params => {
      this.vs.findVakkenVanKlas(Number.parseInt(params.get("klasid"))).subscribe(vakkenlijst => {
        this.vakken = vakkenlijst;
      })
    })
  }

  maakDocentVakkenDropDown() {
    this.dvs.findDocentVakken().subscribe(dv => {
      for (let i = 0; i < dv.length; i++) {
        this.vs.findVak(dv[i].vakid).subscribe(vak => {
          this.ds.findDocent(dv[i].docentid).subscribe(docent => {
            document.getElementById("kiesdocentvak").innerHTML += "<option>" + dv[i].id + ". " + vak.naam + " " + docent.achternaam + "</option>";
          })
        })
      }
    });
  }

  voegDocentVakToe() {
    var docentvakID = (<HTMLInputElement>document.getElementById('kiesdocentvak')).value.split(".")[0];
    this.docentvak.id = Number.parseInt(docentvakID);
    console.log(this.docentvak);
    this.activatedrouter.paramMap.subscribe(params => {
      let klasid = Number.parseInt(params.get("klasid"));
      this.dvs.voegDocentVakToe(this.docentvak, klasid).subscribe();
    })
  }
}

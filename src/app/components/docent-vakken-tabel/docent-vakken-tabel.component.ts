import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocentService } from '../../service/docent.service';
import { VakService } from '../../service/vak.service';
import { VakDto } from '../../models/VakDto';
import { Router } from '@angular/router';
import { DocentVakDto } from '../../models/DocentVakDto';

@Component({
  selector: 'app-docent-vakken-tabel',
  templateUrl: './docent-vakken-tabel.component.html',
  styleUrls: ['./docent-vakken-tabel.component.css']
})
export class DocentVakkenTabelComponent implements OnInit {

  vakken: VakDto[];
  docentvak: DocentVakDto = {
    id: undefined,
    docentid: undefined,
    vakid: undefined
  }

  constructor(private vs: VakService, private ds: DocentService, private router: Router, private activatedrouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.maakVakkenDropdown();
    this.activatedrouter.paramMap.subscribe(params => {
      this.ds.findVakkenVanDocent(Number.parseInt(params.get("docentid"))).subscribe(vakkenlijst => {
        this.vakken = vakkenlijst;
      })
    })
  }

  bekijkKlassen(v: VakDto) {
    this.activatedrouter.paramMap.subscribe(params => {
      var docentid = Number.parseInt(params.get("docentid"));
      this.router.navigateByUrl('docent/' + docentid + '/vak/' + v.id + '/klassen');
    })
  }

  maakVakkenDropdown(){
    this.vs.findVakken().subscribe(vakken => {
      for(let i=0; i<vakken.length; i++){
        document.getElementById("kiesvak").innerHTML += "<option>" + vakken[i].id + ". " + vakken[i].naam + "</option>";
      }
    })
  }

  voegVakToe(){
    var vakID = (<HTMLInputElement>document.getElementById("kiesvak")).value.split(".")[0];
    this.docentvak.vakid = Number.parseInt(vakID);
    this.activatedrouter.paramMap.subscribe(params => {
      this.docentvak.docentid = Number.parseInt(params.get("docentid"));
    })
    this.ds.voegVakToe(this.docentvak).subscribe();
  }
}

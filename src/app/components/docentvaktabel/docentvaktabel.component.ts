import { Component, OnInit } from '@angular/core';
import { DocentService } from '../../service/docent.service';
import { DocentDto } from '../../models/DocentDto';
import { VakService } from '../../service/vak.service';
import { VakDto } from '../../models/VakDto';
import { ActivatedRoute } from '@angular/router';
//import { ViewDocentVakPageComponent } from 'src/app/view-docent-vak-page/view-docent-vak-page.component';

@Component({
  selector: 'app-docentvaktabel',
  templateUrl: './docentvaktabel.component.html',
  styleUrls: ['./docentvaktabel.component.css']
})
export class DocentvaktabelComponent implements OnInit {

  docenten: DocentDto[];
  vakken: VakDto[];
  //ViewDocentVakPageComponent: ViewDocentVakPageComponent[];

  constructor(private ds: DocentService, private vs: VakService, private activatedrouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedrouter.paramMap.subscribe(params =>{
      this.ds.findVakkenVanDocent(Number.parseInt(params.get("docentid"))).subscribe(vakkenlijst => {
        this.vakken = vakkenlijst;
      })
    })
  }

  maakTabelLeeg() {
    this.docenten = [];
    this.vakken = [];
  }
}

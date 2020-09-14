import { Component, OnInit } from '@angular/core';
import { DocentDto } from '../models/DocentDto';
import { VakDto } from '../models/VakDto';
import { KlasDto } from '../models/KlasDto';
import { ActivatedRoute } from '@angular/router';
import { DocentService } from '../service/docent.service';
import { VakService } from '../service/vak.service';
import {KlasService } from '../service/klas.service';

@Component({
  selector: 'app-view-cijfers-docent-page',
  templateUrl: './view-cijfers-docent-page.component.html',
  styleUrls: ['./view-cijfers-docent-page.component.css']
})
export class ViewCijfersDocentPageComponent implements OnInit {

  docent: DocentDto;
  vak: VakDto;
  klas: KlasDto;

  constructor(private ds: DocentService, private vs: VakService, private ks: KlasService, private activatedrouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedrouter.paramMap.subscribe(params => {
      this.ds.findDocent(Number.parseInt(params.get("docentid"))).subscribe(docent => {
        this.docent = docent;
      })
      this.vs.findVak(Number.parseInt(params.get("vakid"))).subscribe(vak => {
        this.vak = vak;
      })
      this.ks.findKlas(Number.parseInt(params.get("klasid"))).subscribe(klas =>{
        this.klas = klas;
      })
    })
  }
}

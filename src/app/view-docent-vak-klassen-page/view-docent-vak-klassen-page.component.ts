import { Component, OnInit } from '@angular/core';
import { VakDto } from '../models/VakDto';
import { DocentDto } from '../models/DocentDto';
import { ActivatedRoute } from '@angular/router';
import { DocentService } from '../service/docent.service';
import { VakService } from '../service/vak.service';

@Component({
  selector: 'app-view-docent-vak-klassen-page',
  templateUrl: './view-docent-vak-klassen-page.component.html',
  styleUrls: ['./view-docent-vak-klassen-page.component.css']
})
export class ViewDocentVakKlassenPageComponent implements OnInit {

  docent: DocentDto;
  vak: VakDto;

  constructor(private ds: DocentService, private activatedrouter: ActivatedRoute, private vs: VakService) { }

  ngOnInit(): void {
    this.activatedrouter.paramMap.subscribe(params =>{
      this.ds.findDocent(Number.parseInt(params.get("docentid"))).subscribe(docent =>{
        this.docent = docent;
      })
      this.vs.findVak(Number.parseInt(params.get("vakid"))).subscribe(vak => {
        this.vak = vak;
      })
    })
  }

}

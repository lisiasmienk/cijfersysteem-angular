import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KlasDto } from '../../models/KlasDto';
import { VakDto } from '../../models/VakDto';
import { DocentDto } from '../../models/DocentDto';
import { KlasService } from '../../service/klas.service';
import { VakService } from '../../service/vak.service';
import { DocentService } from '../../service/docent.service';


@Component({
  selector: 'app-view-docent-klas-vak-toetsen',
  templateUrl: './view-docent-klas-vak-toetsen.component.html',
  styleUrls: ['./view-docent-klas-vak-toetsen.component.css']
})
export class ViewDocentKlasVakToetsenComponent implements OnInit {

  docent: DocentDto;
  vak: VakDto;
  klas: KlasDto;

  constructor(private vs: VakService, private ds: DocentService, private ks: KlasService, private activatedrouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedrouter.paramMap.subscribe(params =>{
      this.ds.findDocent(Number.parseInt(params.get("docentid"))).subscribe(docent =>{
        this.docent =  docent;
      })
      this.ks.findKlas(Number.parseInt(params.get("klasid"))).subscribe(klas =>{
        this.klas =  klas;
      })
      this.vs.findVak(Number.parseInt(params.get("vakid"))).subscribe(vak =>{
        this.vak =  vak;
      })
    })
  }

}

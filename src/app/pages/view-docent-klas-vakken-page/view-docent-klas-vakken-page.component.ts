import { Component, OnInit } from '@angular/core';
import { DocentDto } from '../../models/DocentDto';
import { ActivatedRoute } from '@angular/router';
import { DocentService } from '../../service/docent.service';
import { KlasService } from '../../service/klas.service';
import { KlasDto } from '../../models/KlasDto';

@Component({
  selector: 'app-view-docent-klas-vakken-page',
  templateUrl: './view-docent-klas-vakken-page.component.html',
  styleUrls: ['./view-docent-klas-vakken-page.component.css']
})
export class ViewDocentKlasVakkenPageComponent implements OnInit {

  docent: DocentDto;
  klas: KlasDto;

    constructor(private ds: DocentService, private activatedrouter: ActivatedRoute, private ks: KlasService) { }

  ngOnInit(): void {
    this.activatedrouter.paramMap.subscribe(params =>{
      this.ds.findDocent(Number.parseInt(params.get("docentid"))).subscribe(docent =>{
        this.docent = docent;
      })
      this.ks.findKlas(Number.parseInt(params.get("klasid"))).subscribe(klas => {
        this.klas = klas;
      })
    })
  }

}

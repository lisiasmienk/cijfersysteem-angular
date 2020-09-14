import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KlasService } from '../service/klas.service';
import { KlasDto } from '../models/KlasDto';

@Component({
  selector: 'app-view-leerlingen-van-klas-page',
  templateUrl: './view-leerlingen-van-klas-page.component.html',
  styleUrls: ['./view-leerlingen-van-klas-page.component.css']
})
export class ViewLeerlingenVanKlasPageComponent implements OnInit {

  klas : KlasDto;

  constructor(private ks: KlasService, private activatedrouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedrouter.paramMap.subscribe(params =>{
      this.ks.findKlas(Number.parseInt(params.get("klasid"))).subscribe(klas =>{
        this.klas = klas;
      })
    })
  }

}

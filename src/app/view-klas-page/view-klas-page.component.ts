import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KlasService } from '../service/klas.service';
import { KlasDto } from '../models/KlasDto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-klas-page',
  templateUrl: './view-klas-page.component.html',
  styleUrls: ['./view-klas-page.component.css']
})
export class ViewKlasPageComponent implements OnInit {

  klas : KlasDto;

  constructor(private ks: KlasService, private router: Router, private activatedrouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedrouter.paramMap.subscribe(params =>{
      this.ks.findKlas(Number.parseInt(params.get("klasid"))).subscribe(klas =>{
        this.klas = klas;
      })
    })
  }

  bekijkLeerlingen(k: KlasDto){
    this.router.navigateByUrl('/klas/' + k.id + '/leerlingen');
  }

  bekijkVakken(k: KlasDto){
    this.router.navigateByUrl('klas/' + k.id + '/vakken');
  }

  bekijkToetsen(k : KlasDto){
    this.router.navigateByUrl('klas/' + k.id + '/toetsen');
  }
}

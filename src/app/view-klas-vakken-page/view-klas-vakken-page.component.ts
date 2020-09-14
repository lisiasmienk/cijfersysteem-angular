import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KlasService } from '../service/klas.service';
import { KlasDto } from '../models/KlasDto';

@Component({
  selector: 'app-view-klas-vakken-page',
  templateUrl: './view-klas-vakken-page.component.html',
  styleUrls: ['./view-klas-vakken-page.component.css']
})
export class ViewKlasVakkenPageComponent implements OnInit {

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

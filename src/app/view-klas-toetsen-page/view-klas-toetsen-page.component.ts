import { Component, OnInit } from '@angular/core';
import { KlasDto } from '../models/KlasDto';
import { KlasService } from '../service/klas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-klas-toetsen-page',
  templateUrl: './view-klas-toetsen-page.component.html',
  styleUrls: ['./view-klas-toetsen-page.component.css']
})
export class ViewKlasToetsenPageComponent implements OnInit {

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

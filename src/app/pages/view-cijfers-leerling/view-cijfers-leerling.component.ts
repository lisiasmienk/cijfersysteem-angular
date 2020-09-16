import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeerlingDto } from '../../models/LeerlingDto';
import { KlasDto } from '../../models/KlasDto';
import { KlasService } from '../../service/klas.service';
import { LeerlingService } from '../../service/leerling.service';

@Component({
  selector: 'app-view-cijfers-leerling',
  templateUrl: './view-cijfers-leerling.component.html',
  styleUrls: ['./view-cijfers-leerling.component.css']
})
export class ViewCijfersLeerlingComponent implements OnInit {

  leerling: LeerlingDto;
  //klas: KlasDto;

  constructor(private ls : LeerlingService, private ks: KlasService,private activatedrouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedrouter.paramMap.subscribe(params =>{
      this.ls.findLeerling(Number.parseInt(params.get("leerlingid"))).subscribe(leerling =>{
        this.leerling = leerling;
      })
    })
  }

}

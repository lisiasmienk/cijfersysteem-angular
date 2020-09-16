import { Component, OnInit } from '@angular/core';
import { LeerlingCijfersDto } from '../../models/LeerlingCijfersDto';
import { ActivatedRoute } from '@angular/router';
import { CijferService } from '../../service/cijfer.service';

@Component({
  selector: 'app-leerling-cijfer-tabel',
  templateUrl: './leerling-cijfer-tabel.component.html',
  styleUrls: ['./leerling-cijfer-tabel.component.css']
})
export class LeerlingCijferTabelComponent implements OnInit {

  cijfers: LeerlingCijfersDto[];

  constructor(private cs: CijferService, private activatedrouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedrouter.paramMap.subscribe(params =>{
      this.cs.findLeerlingCijferOverzicht(Number.parseInt(params.get("leerlingid"))).subscribe(cijferoverzicht =>{
        this.cijfers = cijferoverzicht;
      })
    })
  }

}

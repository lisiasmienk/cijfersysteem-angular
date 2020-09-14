import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocentCijfersDto } from '../../models/DocentCijfersDto';
import { CijferService } from '../../service/cijfer.service';

@Component({
  selector: 'app-docent-cijfer-tabel',
  templateUrl: './docent-cijfer-tabel.component.html',
  styleUrls: ['./docent-cijfer-tabel.component.css']
})
export class DocentCijferTabelComponent implements OnInit {

  cijfers: DocentCijfersDto[];

  constructor(private cs: CijferService, private activatedrouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedrouter.paramMap.subscribe(params =>{
      this.cs.findCijfersVanLeerlingenVanDocentVak(Number.parseInt(params.get("docentid")), Number.parseInt(params.get("vakid")), Number.parseInt(params.get("klasid"))).subscribe(cijferlijst => {
        this.cijfers = cijferlijst;
      })
    })
  }
}

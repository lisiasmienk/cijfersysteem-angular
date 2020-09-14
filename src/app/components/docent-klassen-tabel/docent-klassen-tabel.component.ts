import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocentService } from '../../service/docent.service';
import { KlasDto } from '../../models/KlasDto';
import { DocentDto } from '../../models/DocentDto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-docent-klassen-tabel',
  templateUrl: './docent-klassen-tabel.component.html',
  styleUrls: ['./docent-klassen-tabel.component.css']
})
export class DocentKlassenTabelComponent implements OnInit {

  klassen: KlasDto[];

  constructor(private ds: DocentService, private router: Router, private activatedrouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedrouter.paramMap.subscribe(params =>{
      this.ds.findKlassenVanDocent(Number.parseInt(params.get("docentid"))).subscribe(klassenlijst => {
        this.klassen = klassenlijst;
      })
    })
  }


  bekijkVakken(k: KlasDto){
    this.activatedrouter.paramMap.subscribe(params=>{
      var docentid = Number.parseInt(params.get("docentid"));
      this.router.navigateByUrl('docent/' + docentid + '/klas/' + k.id + '/vakken');
    })
  }
}

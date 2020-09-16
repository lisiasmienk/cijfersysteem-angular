import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DocentService } from '../../service/docent.service';
import { VakDto } from '../../models/VakDto';

@Component({
  selector: 'app-docent-klas-vakken-tabel',
  templateUrl: './docent-klas-vakken-tabel.component.html',
  styleUrls: ['./docent-klas-vakken-tabel.component.css']
})
export class DocentKlasVakkenTabelComponent implements OnInit {

  vakken: VakDto[];

  constructor(private ds: DocentService, private router: Router, private activatedrouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedrouter.paramMap.subscribe(params => {
      this.ds.findVakkenVanDocentKlas(Number.parseInt(params.get("docentid")), Number.parseInt(params.get("klasid"))).subscribe(vakkenlijst => {
        this.vakken = vakkenlijst;
      })
    })
  }

  bekijkCijfers(v: VakDto) {
    this.activatedrouter.paramMap.subscribe(params => {
      var docentid = Number.parseInt(params.get("docentid"));
      var klasid = Number.parseInt(params.get("klasid"));
      this.router.navigateByUrl('docent/' + docentid + '/vak/' + v.id + "/klas/" + klasid + "/cijfers");
    })
  }

  bekijkToetsen(v: VakDto){
    this.activatedrouter.paramMap.subscribe(params => {
      var docentid = Number.parseInt(params.get("docentid"));
      var klasid = Number.parseInt(params.get("klasid"));
      this.router.navigateByUrl('docent/' + docentid + '/vak/' + v.id + "/klas/" + klasid + "/toetsen");
    })
  }

}

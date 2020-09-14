import { Component, OnInit } from '@angular/core';
import { KlasDto } from '../../models/KlasDto';
import { DocentService } from '../../service/docent.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-docent-vak-klassen-tabel',
  templateUrl: './docent-vak-klassen-tabel.component.html',
  styleUrls: ['./docent-vak-klassen-tabel.component.css']
})
export class DocentVakKlassenTabelComponent implements OnInit {

  klassen: KlasDto[];

  constructor(private ds: DocentService, private router: Router, private activatedrouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedrouter.paramMap.subscribe(params =>{
      this.ds.findKlassenVanDocentVak(Number.parseInt(params.get("docentid")), Number.parseInt(params.get("vakid"))).subscribe(klassenlijst => {
        this.klassen = klassenlijst;
      })
    })
  }

  bekijkCijfers(k: KlasDto){
    this.activatedrouter.paramMap.subscribe(params => {
      var docentid = Number.parseInt(params.get("docentid"));
      var vakid = Number.parseInt(params.get("vakid"));
      this.router.navigateByUrl('docent/' + docentid + '/vak/' + vakid + "/klas/" + k.id + "/cijfers");
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ToetsService } from '../../service/toets.service';
import { ToetsDto } from '../../models/ToetsDto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-docent-klas-vak-toetsen-tabel',
  templateUrl: './docent-klas-vak-toetsen-tabel.component.html',
  styleUrls: ['./docent-klas-vak-toetsen-tabel.component.css']
})
export class DocentKlasVakToetsenTabelComponent implements OnInit {

  toetsen : ToetsDto[];

  constructor(private ts: ToetsService, private activatedrouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedrouter.paramMap.subscribe(params =>{
      this.ts.findToetsenVanDocentVakKlas(Number.parseInt(params.get("docentid")),Number.parseInt(params.get("vakid")),Number.parseInt(params.get("klasid"))).subscribe(toetsen => {
        this.toetsen = toetsen;
      })
    })
  }

}

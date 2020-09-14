import { Component, OnInit } from '@angular/core';
import { ToetsService } from '../../service/toets.service';
import { ToetsDto } from '../../models/ToetsDto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-klas-toetsen-tabel',
  templateUrl: './klas-toetsen-tabel.component.html',
  styleUrls: ['./klas-toetsen-tabel.component.css']
})
export class KlasToetsenTabelComponent implements OnInit {

  toetsen: ToetsDto[];

  constructor(private ts: ToetsService, private activatedrouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedrouter.paramMap.subscribe(params =>{
      this.ts.findKlasToetsen(Number.parseInt(params.get("klasid"))).subscribe(toetsen => {
        this.toetsen = toetsen;
      })
    })
  }
}
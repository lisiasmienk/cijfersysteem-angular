import { Component, OnInit } from '@angular/core';
import { ToetsService } from '../../service/toets.service';
import { ToetsDto } from '../../models/ToetsDto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-toets-van-vak-tabel',
  templateUrl: './toets-van-vak-tabel.component.html',
  styleUrls: ['./toets-van-vak-tabel.component.css']
})
export class ToetsVanVakTabelComponent implements OnInit {

  toetsen: ToetsDto[];

  constructor(private ts: ToetsService, private activatedrouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedrouter.paramMap.subscribe(params =>{
      this.ts.findToetsenVanVak(Number.parseInt(params.get("vakid"))).subscribe(toetsenlijst => {
        this.toetsen = toetsenlijst;
      });
    })
  }

  maakTabelLeeg(){
    this.toetsen = [];
  }
}
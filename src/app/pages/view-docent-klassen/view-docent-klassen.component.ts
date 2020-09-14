import { Component, OnInit } from '@angular/core';
import { DocentDto } from '../../models/DocentDto';
import { DocentService } from '../../service/docent.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-docent-klassen',
  templateUrl: './view-docent-klassen.component.html',
  styleUrls: ['./view-docent-klassen.component.css']
})
export class ViewDocentKlassenComponent implements OnInit {

  docent: DocentDto;

  constructor(private ds: DocentService, private activatedrouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedrouter.paramMap.subscribe(params =>{
      this.ds.findDocent(Number.parseInt(params.get("docentid"))).subscribe(docent =>{
        this.docent = docent;
      })
    })
  }

}

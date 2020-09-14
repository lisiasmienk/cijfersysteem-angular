import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocentDto } from '../../models/DocentDto';
import { DocentService } from '../../service/docent.service';

@Component({
  selector: 'app-view-docent-vak-page',
  templateUrl: './view-docent-vak-page.component.html',
  styleUrls: ['./view-docent-vak-page.component.css']
})
export class ViewDocentVakPageComponent implements OnInit {

  constructor(private ds: DocentService, private activatedrouter: ActivatedRoute) { }

  docent: DocentDto;

  ngOnInit(): void {
    this.activatedrouter.paramMap.subscribe(params => {
      this.ds.findDocent(Number.parseInt(params.get("docentid"))).subscribe(docent => {
        this.docent = docent;
      })
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { VakDto } from '../models/VakDto';
import { VakService } from '../service/vak.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view-toetsen-van-vak-page',
  templateUrl: './view-toetsen-van-vak-page.component.html',
  styleUrls: ['./view-toetsen-van-vak-page.component.css']
})
export class ViewToetsenVanVakPageComponent implements OnInit {

  vak : VakDto;

  constructor(private vs : VakService, private activatedrouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedrouter.paramMap.subscribe(params => {
      this.vs.findVak(Number.parseInt(params.get("vakid"))).subscribe( vak =>{
        this.vak = vak;
      })
    })
  }

}

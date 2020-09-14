import { Component, OnInit } from '@angular/core';
import { VakService } from '../../service/vak.service';
import { VakDto } from '../../models/VakDto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vaktabel',
  templateUrl: './vaktabel.component.html',
  styleUrls: ['./vaktabel.component.css']
})
export class VaktabelComponent implements OnInit {

  vakken: VakDto[];
  vak: VakDto = {
    naam: undefined,
    id: undefined
  };

  constructor(private vs: VakService, private router: Router) { }

  ngOnInit(): void {
    this.vs.findVakken().subscribe(lijstVanVakken => {
      this.vakken = lijstVanVakken;
    });
  }

  maakTabelLeeg() {
    this.vakken = [];
  }

  bekijkToetsenVanVak(v: VakDto) {
    this.router.navigateByUrl('/toetsen/' + v.id);
  }

  slaVakOp() : void{
    this.vak.naam = (<HTMLInputElement>document.getElementById("naamInput")).value;
    this.vs.maakVakAan(this.vak).subscribe( (vak)=> console.log(vak));
  }
}

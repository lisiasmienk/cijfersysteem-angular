import { Component, OnInit } from '@angular/core';
import { DocentService } from '../../service/docent.service';
import { DocentDto } from '../../models/DocentDto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-docenttabel',
  templateUrl: './docenttabel.component.html',
  styleUrls: ['./docenttabel.component.css']
})
export class DocenttabelComponent implements OnInit {

 
  docenten: DocentDto[];
  docent: DocentDto = {
    voornaam : undefined,
    achternaam : undefined,
    id : undefined
  }

  constructor(private ds: DocentService, private router: Router) { }

  ngOnInit(): void {

    this.ds.findDocenten().subscribe( lijstVanDocenten => {
      this.docenten = lijstVanDocenten;
    });
  }

  maakTabelLeeg(){
    this.docenten = [];
  }

  bekijkDocentVakken(d: DocentDto){ 
    this.router.navigateByUrl('/docent/'+ d.id + '/vakken');
  }

  bekijkDocentKlassen(d: DocentDto){ 
    this.router.navigateByUrl('/docent/'+ d.id + '/klassen');
  }

  slaDocentOp(): void{
    // this.docent.id = parseInt((<HTMLInputElement>document.getElementById("leerlingnrInput")).value);
    this.docent.voornaam = (<HTMLInputElement>document.getElementById("voornaamInput")).value;
    this.docent.achternaam = (<HTMLInputElement>document.getElementById("achternaamInput")).value;
    this.ds.maakDocentAan(this.docent).subscribe( (docent) => console.log(docent));
  }
}


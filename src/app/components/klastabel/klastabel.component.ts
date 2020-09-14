import { Component, OnInit } from '@angular/core';
import { KlasDto } from '../../models/KlasDto';
import { KlasService } from '../../service/klas.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-klastabel',
  templateUrl: './klastabel.component.html',
  styleUrls: ['./klastabel.component.css']
})
export class KlastabelComponent implements OnInit {

  klassen: KlasDto[];
  klas: KlasDto = {
    naam : undefined,
    niveau: undefined,
    id : undefined
  }

  
  constructor(private ks: KlasService, private router: Router) { }

  ngOnInit(): void {

    this.ks.findKlassen().subscribe( lijstVanKlassen => {
      this.klassen = lijstVanKlassen;
    });
  }

  bekijkLeerlingen(k: KlasDto){
    this.router.navigateByUrl('/klas/' + k.id + '/leerlingen');
  }

  bekijkVakken(k: KlasDto){
    this.router.navigateByUrl('klas/' + k.id + '/vakken');
  }

  bekijkToetsen(k : KlasDto){
    this.router.navigateByUrl('klas/' + k.id + '/toetsen');
  }
  bekijkKlas(k: KlasDto){
    this.router.navigateByUrl('/klas/' + k.id);
  }

  slaKlasOp(): void{
    this.klas.naam = (<HTMLInputElement>document.getElementById("naamInput")).value;
    this.klas.niveau = (<HTMLInputElement>document.getElementById("niveauInput")).value;
    this.ks.maakKlasAan(this.klas).subscribe( (klas) => console.log(klas));
  }

}
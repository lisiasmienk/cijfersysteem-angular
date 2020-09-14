import { Component, OnInit } from '@angular/core';
import { LeerlingDto } from '../../models/LeerlingDto';
import { LeerlingService } from '../../service/leerling.service';
import { KlasService } from '../../service/klas.service';
import { ActivatedRoute } from '@angular/router';
import { KlasLeerlingDto } from '../../models/KlasLeerlingDto';

@Component({
  selector: 'app-klasleerlingtabel',
  templateUrl: './klasleerlingtabel.component.html',
  styleUrls: ['./klasleerlingtabel.component.css']
})
export class KlasleerlingtabelComponent implements OnInit {

  leerling: LeerlingDto;
  leerlingen: LeerlingDto[];
  leerlingenDrop: LeerlingDto[];
  klasleerling: KlasLeerlingDto = {
    klasid : undefined,
    leerlingid : undefined
  }

  constructor(private ks: KlasService, private ls: LeerlingService, private activatedrouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.maakLeerlingenDropdown();
    this.activatedrouter.paramMap.subscribe(params => {
      this.ls.findLeerlingenVanKlas(Number.parseInt(params.get("klasid"))).subscribe(leerlingenlijst => {
        this.leerlingen = leerlingenlijst;
      });
    })
  }

  maakLeerlingenDropdown() {
    this.ls.findLeerlingen().subscribe(leerlingenlijst2 => {
      this.leerlingenDrop = leerlingenlijst2;
      for (let i = 0; i < leerlingenlijst2.length; i++) {
        document.getElementById("kiesleerling").innerHTML += "<option>" + leerlingenlijst2[i].id + ". " + leerlingenlijst2[i].voornaam + " " + leerlingenlijst2[i].achternaam + "</option>";
      }
    });
  }

  voegLeerlingToe() {
    var leerlingID = (<HTMLInputElement>document.getElementById('kiesleerling')).value.split(".")[0];
    this.klasleerling.leerlingid = Number.parseInt(leerlingID);
    this.activatedrouter.paramMap.subscribe(params => {
      this.klasleerling.klasid = Number.parseInt(params.get("klasid"));
    })
    this.ks.voegLeerlingToeService(this.klasleerling).subscribe();   
  }
} 

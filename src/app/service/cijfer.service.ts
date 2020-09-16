import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DocentCijfersDto } from '../models/DocentCijfersDto';
import { environment } from '../../environments/environment';
import { LeerlingCijfersDto } from '../models/LeerlingCijfersDto';

@Injectable({
  providedIn: 'root'
})
export class CijferService {

  constructor(private http: HttpClient) { }

  findCijfersVanLeerlingenVanDocentVak(docentid: number, vakid: number, klasid: number){
    return this.http.get<DocentCijfersDto[]>(`${environment.apiURL}/toonCijfersVan/` + docentid +`/` + vakid + `/` + klasid);
  }

  findLeerlingCijferOverzicht(leerlingid: number){
    return this.http.get<LeerlingCijfersDto[]>(`${environment.apiURL}/cijfersVan/` + leerlingid);
  }
}

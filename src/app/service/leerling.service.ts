import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LeerlingDto } from '../models/LeerlingDto';
import { KlasDto } from '../models/KlasDto';
import { LeerlingTabelComponent } from '../components/leerlingtabel/leerlingtabel.component';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class LeerlingService {

  lc : LeerlingTabelComponent;
  leerlingDto : LeerlingDto;

  constructor(private http: HttpClient) { }

  findLeerling(leerlingid : number): Observable<LeerlingDto>{
    return this.http.get<LeerlingDto>(`${environment.apiURL}/leerling/` + leerlingid);
  }

  findLeerlingen(): Observable<LeerlingDto[]> {
    return this.http.get<LeerlingDto[]>(`${environment.apiURL}/leerlingOverzicht`);
  }

  findLeerlingenVanKlas(klasid: number): Observable<LeerlingDto[]> {
    return this.http.get<LeerlingDto[]>(`${environment.apiURL}/leerlingenInKlas/` + klasid);
  }

  maakLeerlingAan(leerling: LeerlingDto): Observable<void> {
    return this.http.post<void>(`${environment.apiURL}/api/maakLeerling`, leerling);
  }

  findKlassenVanLeerling(leerlingid: number): Observable<KlasDto[]>{
    //return this.http.post<void>('http://localhost:8082/api/maakLeerling', leerling);
    return this.http.get<KlasDto[]>(`${environment.apiURL}/klassenVanLeerling/` + leerlingid);
  }

}

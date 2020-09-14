import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DocentDto } from '../models/DocentDto';
import { environment } from '../../environments/environment';
import { KlasDto } from '../models/KlasDto';
import { VakDto } from '../models/VakDto';
import { DocentVakDto } from '../models/DocentVakDto';

@Injectable({
  providedIn: 'root'
})
export class DocentService {

  constructor(private http: HttpClient) { }

  findDocenten(): Observable<DocentDto[]> {
    return this.http.get<DocentDto[]>(`${environment.apiURL}/docentOverzicht`)
  }

  maakDocentAan(docent: DocentDto): Observable<any> {
    console.log(docent.voornaam);
    console.log(docent.achternaam);
    return this.http.post<any>(`${environment.apiURL}/api/maakDocent`, docent);
  }

  findDocent(docentid: number): Observable<DocentDto>{
    return this.http.get<DocentDto>(`${environment.apiURL}/docent/` + docentid);
  }
  findKlassenVanDocent(docentid: number): Observable<KlasDto[]>{
    return this.http.get<KlasDto[]>(`${environment.apiURL}/klassenVanDocent/` + docentid);
  }
  
  findVakkenVanDocent(docentid: number): Observable<VakDto[]>{
    return this.http.get<VakDto[]>(`${environment.apiURL}/vakkenVanDocent/` + docentid);
  }

  findKlassenVanDocentVak(docentid: number, vakid: number): Observable<KlasDto[]>{
    return this.http.get<KlasDto[]>(`${environment.apiURL}/klassenVanDocentEnVak/` + docentid + "/" + vakid);
  }

  voegVakToe(docentvak: DocentVakDto): Observable<any>{
    return this.http.post<any>(`${environment.apiURL}/maakDocentVak`, docentvak);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { DocentVakDto } from '../models/DocentVakDto';
import { DocentDto } from '../models/DocentDto';
import { VakDto } from '../models/VakDto';

@Injectable({
  providedIn: 'root'
})
export class DocentVakService {

  constructor(private http: HttpClient) { }

  findDocentVakken(): Observable<DocentVakDto[]>{
    return this.http.get<DocentVakDto[]>(`${environment.apiURL}/docentVakOverzicht`);
  }

  voegDocentVakToe(docentvak: DocentVakDto, klasid: number): Observable<any>{
    console.log("in service");
    return this.http.post<any>(`${environment.apiURL}/api/voegDocentVakToe/` + klasid, docentvak);
  }

  findDocentVak(d: DocentDto, v: VakDto){
    return this.http.get<DocentVakDto>(`${environment.apiURL}/klassenVanDocentEnVak/`+ d.id + "/" + v.id);
  }
}

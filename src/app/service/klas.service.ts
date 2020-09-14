import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KlasDto } from '../models/KlasDto';
import { LeerlingDto} from '../models/LeerlingDto';
import { environment } from '../../environments/environment';
import { KlasLeerlingDto } from '../models/KlasLeerlingDto';

@Injectable({
  providedIn: 'root'
})
export class KlasService {

  leerling: LeerlingDto;

  constructor(private http: HttpClient) { }

  findKlassen(): Observable<KlasDto[]> {
    return this.http.get<KlasDto[]>(`${environment.apiURL}/klassenOverzicht`)
  }

  findKlas(klasid: number): Observable<KlasDto>{
    return this.http.get<KlasDto>(`${environment.apiURL}/klas/` + klasid);
  }
  
  maakKlasAan(klas: KlasDto): Observable<any> {
    return this.http.post<any>(`${environment.apiURL}/api/maakKlas`, klas);
  }

  voegLeerlingToeService(leerling: KlasLeerlingDto): Observable<void>{
    return this.http.post<void>(`${environment.apiURL}/api/voegLeerlingToe`, leerling);
  }
}

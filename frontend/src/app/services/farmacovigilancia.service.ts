import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Farmacovigilancia } from '../models/farmacovigilancia'

@Injectable({
  providedIn: 'root'
})
export class FarmacovigilanciaService {

  constructor(private http: HttpClient) { }

  
  getFarmacovigilancias(): Observable<Farmacovigilancia[]>{
    return this.http.get<Farmacovigilancia[]>(environment.apiURL + "/farmacovigilancias");
  }

  
  getFarmacovigilanciasPersona(idPersona: String): Observable<Farmacovigilancia[]>{
    return this.http.get<Farmacovigilancia[]>(environment.apiURL + "/farmacovigilancias/" + idPersona);
  }

  
  addFarmacovigilancia(nuevofarmacovigilancia: Farmacovigilancia): Observable<any>{
    return this.http.post(environment.apiURL + '/farmacovigilancias/new', nuevofarmacovigilancia);
  }
}
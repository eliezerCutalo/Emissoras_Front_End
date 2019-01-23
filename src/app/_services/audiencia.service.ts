import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import {Audiencia} from '../_models/Audiencia.model'
import { api } from '../app.api';
import { map, catchError } from 'rxjs/operators'
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AudienciaService {

  constructor(private http: Http) { }
  baseUrl: string = api + "Audiencia";
  private headers = new Headers()

  createAudiencia(audiencia : Audiencia) {
    this.headers.append('Content-type', 'application/json')
    return this.http.post(this.baseUrl, JSON.stringify(audiencia), new RequestOptions({headers: this.headers}))
    .pipe(
      map(response => {
      return response.json();
      }),
    catchError(ex => throwError(ex))
  )
  }

  getAudienciaEmissora(DataAudiencia : Date, VisaoAudiencia: string) {
    return this.http.get(this.baseUrl  + `/PegarAudienciaEmissora?DataAudiencia=${DataAudiencia}&&VisaoAudiencia=${VisaoAudiencia}`)
    .pipe(
      map(response => {
      return response.json();
      }),
    catchError(ex => throwError(ex))
  )
  }

}

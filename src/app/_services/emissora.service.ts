import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Emissora } from '../_models/Emissora.model'
import { api } from '../app.api';
import { map, catchError } from 'rxjs/operators'
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmissoraService {

  constructor(private http: Http) { }
  baseUrl: string = api + "Emissora";
  private headers = new Headers()

  getEmissoras(): Observable<any> {
    return this.http.get(this.baseUrl)
      .pipe(
        map(response => {
          return response.json();
        }),
        catchError(ex => throwError(ex))
      )
  }
  getEmissoraByNome(Nome: string): Observable<any> {
    return this.http.get(this.baseUrl + `/Find?Nome=${Nome}`)
      .pipe(
        map(response => {
          return response.json();
        }),
        catchError(ex => throwError(ex))
      )
  }

  getEmissoraById(Id: string): Observable<any> {
    return this.http.get(this.baseUrl + `/Find?Nome=${Id}`)
      .pipe(
        map(response => {
          return response.json();
        }),
        catchError(ex => throwError(ex))
      )
  }

  createEmissora(Emissora: Emissora): Observable<any> {
    this.headers.append('Content-type', 'application/json')
    return this.http.post(this.baseUrl, JSON.stringify(Emissora), new RequestOptions({ headers: this.headers }))
      .pipe(
        map(response => {
          return response.json();
        }),
        catchError(ex => (throwError(ex))
        )
      )
  }

  updateEmissora(Emissora: Emissora): Observable<any> {
    this.headers.append('Content-type', 'application/json')
    return this.http.put(this.baseUrl + "/" + Emissora.id, JSON.stringify(Emissora), new RequestOptions({ headers: this.headers }))
      .pipe(
        map(response => {
          return response.json();
        }),
        catchError(ex => throwError(ex.json))
      )
  }

  deleteEmissora(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/' + id).pipe(
      map(response => {
        return response.json();
      }),
      catchError(ex => throwError(ex))
    )
  }
}

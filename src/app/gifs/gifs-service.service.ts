import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, GifsSearchResponse } from './interfaces/searchResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsServiceService {
  constructor(private http: HttpClient) {
    console.log('Servicio iniciado');
  }

  private api_key: string = 'JdN5nmMVa5MNOjhuDtyJhxMpHZMTppZL&q';
  private url: string = 'https://api.giphy.com/v1/gifs/search';
  results: Gif[]=[];

  //El array sobre el q voy a trabajar
  private _historial = [
    'Perros',
    'Gatos',
    'Osos',
    'Moscas',
    'Pandas',
    'Vacas',
    'Monos',
  ];

  //Metodo que devuelve una copia del array
  get historial(): string[] {
    //Los ... significan una copia
    return [...this._historial];
  }

  //Metodo que suma la cadena que recibe al principio del array, no deja que haya repetidos ni mas de 10
  buscarGifs(query: string): void {
    let clean = query.trim().toLowerCase();
    if (clean !== '' && !this._historial.includes(clean)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
    }

    const params = new HttpParams()
      .set('api_key', this.api_key)
      .set('q', query);

    this.http.get<GifsSearchResponse>(this.url, { params }).subscribe((resp) => this.results=resp.data);
  }
}

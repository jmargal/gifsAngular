import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsServiceService {
  constructor() {
    console.log('Servicio iniciado');
  }

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
  buscarGifs(query: string) {
    if (!this._historial.includes(query)) {
      if (this._historial.length == 10) {
        this._historial.splice(0, 1);
        this._historial.unshift(query);
      }else{
        this._historial.unshift(query);
      }
    }
  }
}

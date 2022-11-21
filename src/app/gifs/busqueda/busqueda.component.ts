import { Component, Input } from '@angular/core';
import { GifsServiceService } from '../gifs-service.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent {

  //Declaro que voy a usar el service
  constructor(private gifs_Service:GifsServiceService){  }

  //Propiedad que es una cadena vacia
  query:string="";

  //Metotdo que recibe un string y llama al metodo que tiene el service para añadir a su array
  addQuery(query:string){
    this.gifs_Service.buscarGifs(query);
    this.query="";
  }

}

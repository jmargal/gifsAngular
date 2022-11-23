import { Component } from '@angular/core';
import { GifsServiceService } from '../../gifs/gifs-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  //En el constructor declare que voy a importar el service y lo nombro
  constructor(private gifs_service:GifsServiceService){  
  }

  //Metodo que lo que hace es llamar al metodo del service q devuelve el array 
  get history(): string[] {
    return this.gifs_service.historial;
  }

  goTo(nombreGif:string){
    this.gifs_service.buscarGifs(nombreGif);
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsServiceService } from './gifs-service.service';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { FormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    //Declara los componentes que van a formar parte de este modulo
    GifsPageComponent,BusquedaComponent
  ],
  imports: [
    //Importo el modulo de Form que hace cosas con los formularios
    CommonModule,FormsModule
  ],
  //El provider es el service
  providers:[GifsServiceService],
  //Exporto estos componentes para que cuando importen este modulo puedan utilizarlos
  exports:[GifsPageComponent,BusquedaComponent]
})
export class GifsModule { }

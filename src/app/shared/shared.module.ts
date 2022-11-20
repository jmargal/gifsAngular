import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    //Declaro como de este modulo el componente 
    SidebarComponent
  ],
  imports: [
    CommonModule
  ],
  //Exporto el componente que he importado para que otros modulos al importar este modulo lo tengan
  exports: [SidebarComponent]
})
export class SharedModule { }

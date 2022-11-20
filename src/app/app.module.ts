import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GifsServiceService } from './gifs/gifs-service.service';
import { SharedModule } from './shared/shared.module';
import { GifsModule } from './gifs/gifs.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  //Importo los modulos que he creado en los otros componentes
  imports: [BrowserModule,SharedModule,GifsModule],
  // El provider va a ser el service que he declarado
  providers: [GifsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

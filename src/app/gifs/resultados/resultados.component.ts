import { Component, OnInit } from '@angular/core';
import { GifsServiceService } from '../gifs-service.service';
import { Gif } from '../interfaces/searchResponse.interface';


@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html'
})
export class ResultadosComponent implements OnInit {
  

  constructor(private gifs_Service:GifsServiceService) { }

  ngOnInit(): void {
  }

  get results():Gif[]{
    return this.gifs_Service.results;
  }

}

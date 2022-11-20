import { Component } from '@angular/core';
import { GifsServiceService } from '../gifs-service.service';

@Component({
  selector: 'app-gifs-page',
  templateUrl: './gifs-page.component.html'
})
export class GifsPageComponent{

  constructor(private gifs_Service:GifsServiceService) { }

}

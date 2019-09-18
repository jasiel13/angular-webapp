import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //inyectar el servicio dentro de un cosntructor, el servicio me lo traje de la pagina services/info-pagina.service
  constructor(public InfoPaginaService:InfoPaginaService){

  }
}

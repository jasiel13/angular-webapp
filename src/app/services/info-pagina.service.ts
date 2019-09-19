import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info:InfoPagina={};
  cargada=false;

  equipo:any[]=[];

  //inyectar el servicio que tengo en mi modulo que acabo de crear
  constructor(private http:HttpClient) {
    this.cargarInfo();   
    this.cargarEquipo(); 
   }
   private cargarInfo(){
   //console.log('Servicio de infoPagina listo');

    //leer el archivo json que hice
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp:InfoPagina) => {

      this.cargada=true;
      this.info=resp;
      //console.log(resp);
    });
   }

   private cargarEquipo(){
     this.http.get('https://angular-html-4cb98.firebaseio.com/equipo.json')
     .subscribe((resp:any[])=>{
   
       this.equipo=resp;
       console.log(resp);
     });

   }
}

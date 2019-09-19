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

    //esta propiedad se creo para la clase cargarEquipo   
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

   
   //esta clase es para obtener el json generado en firebase se coloca el link que nos da firebase y se repite casi el mismo paso anterior de la otra clase cargarinfo
   private cargarEquipo(){
     this.http.get('https://angular-html-4cb98.firebaseio.com/equipo.json')
     .subscribe((resp:any[])=>{
   
       this.equipo=resp;
       //console.log(resp);
     });

   }
}

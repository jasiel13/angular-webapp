import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInterface } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  //bandera creada al inicializar la clase
  cargando=true;

  //crear arreglo de productos
  productos: ProductoInterface[]=[];

  constructor(private http: HttpClient) {
    this.cargarProductos();
   }

   private cargarProductos(){
     //esta es la peticion
     this.http.get('https://angular-html-4cb98.firebaseio.com/productos_idx.json')
    //esto es para que haga la peticion
    .subscribe((resp:ProductoInterface[])=>{ 

      console.log(resp);
      this.productos=resp;
      this.cargando=false;

    });
   }
}

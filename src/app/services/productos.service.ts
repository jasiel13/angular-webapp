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
  productosFiltrado:ProductoInterface[]=[];

  constructor(private http: HttpClient) {
    this.cargarProductos();
   }

   private cargarProductos(){

     //crear una promesa
     return new Promise((resolve,reject)=>{

         //esta es la peticion
     this.http.get('https://angular-html-4cb98.firebaseio.com/productos_idx.json')
     //esto es para que haga la peticion
     .subscribe((resp:ProductoInterface[])=>{ 
 
       console.log(resp);
       this.productos=resp;
       this.cargando=false;
       resolve();
 
       //setTimeout(()=>{
         //this.cargando=false;
       //},3000);
       });
     });  
   }

   getProducto(id:string){
     
    //esto es un observable de angular
    return this.http.get(`https://angular-html-4cb98.firebaseio.com/productos/${id}.json`);

   }
   buscarProducto(termino:string){

    if(this.productos.length==0){
      //cargar productos
      this.cargarProductos().then(()=>{
        //ejecutar despues de tener los productos
        //aplicar filtro
        this.filtrarProductos(termino);

      });
    }
    else{
      //aplicar el filtro
      this.filtrarProductos(termino);
    }    
   }

   private filtrarProductos(termino:string){

    //console.log(this.productos);
    this.productosFiltrado=[];

    //CAMBIAR A KEY INCENSITIVE
    termino=termino.toLocaleLowerCase();

    this.productos.forEach(prod=>{
      const tituloLower = prod.titulo.toLocaleLowerCase();
      if ( prod.categoria.indexOf(termino)>=0 || tituloLower.indexOf(termino)>=0){
        this.productosFiltrado.push(prod);

      }
    });

   }
}

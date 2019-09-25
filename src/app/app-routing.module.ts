import {NgModule} from "@angular/core";
import {Routes,RouterModule} from "@angular/router"
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';

//se declara una constante de tipo routes
const app_routes: Routes=[
{path:'home',component:PortafolioComponent},
{path:'about',component:AboutComponent},
{path:'item/:id',component:ItemComponent},
{path:'search/:termino',component:SearchComponent},
{path:'**',pathMatch:'full',redirectTo:'home'}
];

//esto es un decorador 
@NgModule({
    imports:[
        RouterModule.forRoot(app_routes,{useHash:true})
    ],
    exports:[
        RouterModule
    ]

})
//esto es una clase que se puede exportar, clase para crear un modulo
export class AppRoutingModule{

}
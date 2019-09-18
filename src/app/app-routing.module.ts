import {NgModule} from "@angular/core";
import {Routes,RouterModule} from "@angular/router"
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';

//se declara una constante de tipo routes
const app_routes: Routes=[
{path:'home',component:PortafolioComponent},
{path:'about',component:AboutComponent},
{path:'item',component:ItemComponent},
{path:'**',pathMatch:'full',redirectTo:'home'}
];

//esto es un decorador 
@NgModule({
    imports:[
        RouterModule.forRoot(app_routes)
    ],
    exports:[
        RouterModule
    ]

})
//esto es una clase que se puede exportar, clase para crear un modulo
export class AppRoutingModule{

}
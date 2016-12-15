// Importar el núcleo de Angular
import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";
import {RestaurantesListComponent} from "./components/restaurantes-list.component";
import {RestaurantesDetailComponent} from "./components/restaurantes-detail.component";
import {RestaurantesAddComponent} from "./components/restaurantes-add.component";
import {RestaurantesEditComponent} from "./components/restaurantes-edit.component";
 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'mi-app',
    directives: [ROUTER_DIRECTIVES, RestaurantesListComponent],
    templateUrl: 'app/views/home.html'
})

@RouteConfig([
    {path: '/', name: "Home", component: RestaurantesListComponent, useAsDefault: true},
    {path: '/restaurante/:id', name: "Restaurante", component: RestaurantesDetailComponent},
    {path: '/crear-restaurante', name: "CrearRestaurante", component: RestaurantesAddComponent},
    {path: '/editar-restaurante/:id', name: "EditarRestaurante", component: RestaurantesEditComponent},
    {path: '/donde-como-hoy/:random', name: "DondeComoHoy", component: RestaurantesDetailComponent},
])
 
// Clase del componente donde iran los datos y funcionalidades
export class AppComponent { 
    public titulo:String = "Restaurantes";

}

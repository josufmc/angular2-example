// Importar el núcleo de Angular
import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";
import {RestaurantesListComponent} from "./components/restaurantes-list.component";
 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'mi-app',
    directives: [ROUTER_DIRECTIVES, RestaurantesListComponent],
    templateUrl: 'app/views/home.html'
})
 
// Clase del componente donde iran los datos y funcionalidades
export class AppComponent { 
    public titulo:String = "Restaurantes";

}

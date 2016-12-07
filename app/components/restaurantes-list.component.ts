// Importar el núcleo de Angular
import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";
import {RestauranteService} from "../services/restaurante.service";
 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'restaurantes-list',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/views/restaurantes-list.html',
    providers: [RestauranteService]
})
 
// Clase del componente donde iran los datos y funcionalidades
export class RestaurantesListComponent { 
    public titulo:String = "Listado de restaurantes";

    public constructor(private _restauranteService: RestauranteService){}

    public ngOnInit(){
        console.log("list cargado");
    }
}

// Importar el núcleo de Angular
import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";
import {RestauranteService} from "../services/restaurante.service";
import {Restaurante} from "../models/restaurante";
 
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
    public restaurantes: Restaurante[];
    public status: String;
    public errorMessage;
    public loading;
    public confirmado;

    public constructor(private _restauranteService: RestauranteService){}

    public ngOnInit(){
        this.loading = 'show';
        this.getRestaurantes();
        console.log("list cargado");
    }

    getRestaurantes(){
       //this.mostrarCargaDom();

        this._restauranteService.getRestaurantes()
        .subscribe(
            result => {
                this.restaurantes = result.data;
                this.status = result.status;

                if(this.status != "success"){
                    alert("Error en el servidor");
                }
                this.loading = 'hide';
                //this.ocultarCargaDom();
            },
            error => {
                this.errorMessage = <any>error;
                if(this.errorMessage != null){
                    console.log(this.errorMessage);
                    alert("Error en la petición");
                }
            }
        );
    }

    public onBorrarRestaurante(id){
         this._restauranteService.deleteRestaurante(id)
        .subscribe(
            result => {
                this.status = result.status;

                if(this.status != "success"){
                    alert("Error en el servidor");
                }
                this.getRestaurantes();
            },
            error => {
                this.errorMessage = <any>error;
                if(this.errorMessage != null){
                    console.log(this.errorMessage);
                    alert("Error en la petición");
                }
            }
        );
    }

    public onBorrarConfirm(id){
        this.confirmado = id;
    }

    public onCancelarConfirm(){
        this.confirmado = null;
    }

    // Ejemplo para interactura con el DOM
    private mostrarCargaDom(){
        let box_restaurantes = <HTMLElement>document.querySelector("#restaurantes-list .loading");
        box_restaurantes.style.visibility = "visible";
    }

    private ocultarCargaDom(){
        let box_restaurantes = <HTMLElement>document.querySelector("#restaurantes-list .loading");
         box_restaurantes.style.display = "none";
    }
}

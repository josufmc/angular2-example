// Importar el núcleo de Angular
import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from "angular2/router";
import {RestauranteService} from "../services/restaurante.service";
import {Restaurante} from "../models/restaurante";
 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'restaurantes-add',
    templateUrl: 'app/views/restaurantes-add.html',
    providers: [RestauranteService]
})
 
// Clase del componente donde iran los datos y funcionalidades
export class RestaurantesAddComponent { 
    public titulo: String = "Crear restaurante";
    public restaurante: Restaurante;
    public status: String;
    public errorMessage;

    public constructor(
        private _restauranteService: RestauranteService,
        private _routeParams: RouteParams,
        private _router: Router
    ){}

    public ngOnInit(){
        console.log("Component restaurante Add cargado");
        this.restaurante = new Restaurante(
            0,
            this._routeParams.get("nombre"),
            this._routeParams.get("direccion"),
            this._routeParams.get("descripcion"),
            "null",
            "bajo"
        );
    }

    public onSubmit(){
        this._restauranteService.addRestaurante(this.restaurante).subscribe(
            response => {
                this.status = response.status;
                if(this.status !== "success"){
                    alert("Error en el servidor");
                }
            },
            error => {
                this.errorMessage = <any>error;
                if(this.errorMessage != null){
                    console.log(this.errorMessage);
                    alert("Error en la petición");
                }
            }
        );
        this._router.navigate(["Home"]);
    }

    public callPrecio(value){
        this.restaurante.precio = value;
    }

}

// Importar el núcleo de Angular
import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from "angular2/router";
import {RestauranteService} from "../services/restaurante.service";
import {Restaurante} from "../models/restaurante";
 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'restaurantes-edit',
    templateUrl: 'app/views/restaurantes-add.html',
    providers: [RestauranteService]
})
 
// Clase del componente donde iran los datos y funcionalidades
export class RestaurantesEditComponent { 
    public titulo: String = "Editar restaurante";
    public restaurante: Restaurante;
    public status: String;
    public errorMessage;

    public constructor(
        private _restauranteService: RestauranteService,
        private _routeParams: RouteParams,
        private _router: Router
    ){}

    public ngOnInit(){
        this.restaurante = new Restaurante(
            0,
            this._routeParams.get("nombre"),
            this._routeParams.get("direccion"),
            this._routeParams.get("descripcion"),
            "null",
            "bajo"
        );
        this.getRestaurante();
    }

     public getRestaurante(){
        let id = this._routeParams.get("id");
        this._restauranteService.getRestaurante(id)
        .subscribe(
            response => {
                this.restaurante = response.data;
                this.status = response.status;

                if (this.status != 'success'){
                    this._router.navigate(['Home']);
                }
            },
            error => {
                this.errorMessage = <any>error;
                if(this.errorMessage != null){
                    console.log(this.errorMessage);
                    alert("Error en la petición");
                }
            }
        )
    }

    public onSubmit(){
        this._restauranteService.editRestaurante(this.restaurante).subscribe(
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
            },
            () => {
                this._router.navigate(["Home"]);
            }
        );  
    }

    public callPrecio(value){
        this.restaurante.precio = value;
    }

}

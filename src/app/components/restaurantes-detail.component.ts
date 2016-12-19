// Importar el núcleo de Angular
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router";

import {RestauranteService} from "../services/restaurante.service";
import {Restaurante} from "../models/restaurante";
 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'restaurantes-detail',
    templateUrl: '../views/restaurantes-detail.html',
    providers: [RestauranteService]
})
 
// Clase del componente donde iran los datos y funcionalidades
export class RestaurantesDetailComponent { 
    public titulo: String = "Detalle de restaurantes";
    public restaurante: Restaurante;
    public status: String;
    public errorMessage: any;

    public constructor(
        private _restauranteService: RestauranteService,
        private _route: ActivatedRoute,
        private _router: Router,
    ){}

    public ngOnInit(){
        this.getRestaurante();
    }

    public getRestaurante(){
        this._route.params.forEach((params: Params) => {
            let id = params["id"];
            let random = params["random"];

            this._restauranteService.getRestaurante(id, random)
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
        });

       
    }
}

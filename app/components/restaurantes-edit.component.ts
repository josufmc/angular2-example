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

    public filesToUpload: Array<File>;

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

    // *** Meter en un servicio para no duplicar código
    public resultUpload;

    public fileChangeEvent(fileInput: any){
        this.filesToUpload = <Array<File>>fileInput.target.files;
        this.makeFileRequest("http://localhost:8080/slim/restaurantes-api.php/upload-file", [],this.filesToUpload)
            .then((result) =>{
                this.resultUpload = result;
                this.restaurante.imagen = this.resultUpload.filename;
                console.log(this.resultUpload.filename);
            }, (error) =>{
                console.log(error);
            });
    }

    public makeFileRequest(url:string, params:Array<string>, files:Array<File>){
        return new Promise(
            (resolve, reject) => {
                let formData:any = new FormData();
                let xhr = new XMLHttpRequest();
                for(let i=0; i< files.length; i++){
                    formData.append("uploads[]", files[i], files[i].name);
                }

                xhr.onreadystatechange = function(){
                    if(xhr.readyState == 4 ){
                        if (xhr.status == 200){
                            resolve(JSON.parse(xhr.response));
                        } else {
                            reject(xhr.response);
                        }
                    } 
                };
                xhr.open("POST", url, true);
                xhr.send(formData);
            }
        );
    }

}

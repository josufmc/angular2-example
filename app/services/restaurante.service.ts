import {Injectable} from "angular2/core";
import {Http, Response} from "angular2/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import {Restaurante} from "../models/restaurante";

@Injectable()
export class RestauranteService{
    public constructor(private _http: Http){}

    getRestaurantes(){
        return this._http.get("http://localhost:8080/slim/restaurantes-api.php/restaurantes")
        .map(res => res.json());
        
    }

    getRestaurante(id: String){
        return this._http.get("http://localhost:8080/slim/restaurantes-api.php/restaurante/" + id)
        .map(res => res.json());
        
    }
}
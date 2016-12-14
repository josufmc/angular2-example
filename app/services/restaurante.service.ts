import {Injectable} from "angular2/core";
import {Http, Response, Headers} from "angular2/http";
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

    addRestaurante(restaurante:Restaurante){
        let json = JSON.stringify(restaurante);
        let params = "json=" + json;
        let headers = new Headers({"Content-Type": "application/x-www-form-urlencoded"});


        return this._http.post("http://localhost:8080/slim/restaurantes-api.php/restaurantes", 
            params, 
            {headers: headers})
            .map(res => res.json());
    }

    editRestaurante(restaurante:Restaurante){
        let json = JSON.stringify(restaurante);
        let params = "json=" + json;
        let headers = new Headers({"Content-Type": "application/x-www-form-urlencoded"});
        let id = restaurante.id;

        return this._http.post("http://localhost:8080/slim/restaurantes-api.php/update-restaurante/" + id, 
            params, 
            {headers: headers})
            .map(res => res.json());
    }

    deleteRestaurante(id: String){
        return this._http.get("http://localhost:8080/slim/restaurantes-api.php/delete-restaurante/" + id)
        .map(res => res.json());
        
    }
}
// Importar el núcleo de Angular
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'mi-app',
    templateUrl: 'app/views/home.html'
})

// Clase del componente donde iran los datos y funcionalidades
export class AppComponent { 
    public titulo: String = "Restaurantes";
    public fecha: Date = new Date();

}

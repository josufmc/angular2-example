import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: "pruebas"})

export class PruebasPipe implements PipeTransform{
    transform(value: number, por: number) : any {
        let result: string = "La multiplicación de " + value + " por " + por+ " = " + (value * por);
        return result;
    }
}


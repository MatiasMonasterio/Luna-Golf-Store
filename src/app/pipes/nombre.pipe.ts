import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombre'
})
export class NombrePipe implements PipeTransform {

  transform(value: any, valueToReturn: boolean): string {
    let nombre: Array<string> = value.split('|');

    if(valueToReturn) return nombre[0];
    else return nombre[1]
  }

}

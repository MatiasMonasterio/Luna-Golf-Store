import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'detalles'
})
export class DetallesPipe implements PipeTransform {

  transform(value: any): any {
    
    let detalles = value.split('-');
    let returnDetalles = `
      <span>${detalles[0]}</span><br><br>
    `

    for(let i=1; i<detalles.length; i++){
      returnDetalles += `-${detalles[i]}<br>`
    }

    return returnDetalles;
  }

}

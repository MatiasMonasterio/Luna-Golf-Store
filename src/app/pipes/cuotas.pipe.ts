import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cuotas'
})
export class CuotasPipe implements PipeTransform {

  transform(precio: string, cuotas: number): string {
    let precioNumber: number = parseFloat(precio);
    let precioCuota: number;

    if( !Number.isInteger(precioNumber) ) precioNumber = precioNumber * 1000;

    precioCuota = Math.round( precioNumber / cuotas );

    return precioCuota.toString()+',00';
  }

}

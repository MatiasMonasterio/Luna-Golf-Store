import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'precio'
})
export class PrecioPipe implements PipeTransform {

  transform(value: string): string {
    let precio: Array<string> = value.split(',');
    return precio[0];
  }

}

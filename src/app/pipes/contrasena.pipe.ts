import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean = true): string {

    let contrasena: string = value;

    let  i = 0;
    const strLength = value.length;

    if (activar) {
      for (i; i < strLength; i++) {

        value = value.replace(value[i], '*');
      }
      contrasena = value;
    }

    return contrasena;
  }

}

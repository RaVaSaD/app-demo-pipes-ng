import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Sergio';
  nombre2 = 'serGIo GUTiérrez cuaRTero';

  array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI = Math.PI;

  a = 0.234;

  salario = 1234.5;

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Avenida Mediterraneo',
      numero: 14,
      localidad: 'Madrid',
      pais: 'España'
    }
  };

  valorDePromesa = new Promise ( ( resolve, reject) => {

    setTimeout( () => resolve('Llegó la data'), 3500);

  });

  fecha = new Date();

  video = '7wtfhZwyrcc';

  activar = true;

}

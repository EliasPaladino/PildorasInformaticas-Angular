import { Component } from '@angular/core';

@Component({
  selector: 'app-empleados',
  template: `
    <br><br>
    <ul>
      <li *ngFor="let empleado of empleados; let i=index"  style="list-style: none;">{{i + 1}} {{empleado.titulo}}</li>
    </ul>
  `,
  styles: [
  ]
})
export class EmpleadosComponent {
  empleados: Array<{titulo: string}>;

  constructor() {
    this.empleados = [
      {titulo: "Juan Perez es un empleado con 20 años de antiguedad."},
      {titulo: "Elias Paladino es un empleado con 12 años de antiguedad."},
      {titulo: "Martin Garcia se acaba de jubilar."},
      {titulo: "Elon Musk es el CEO."},
      {titulo: "Alberto Fernandez esta de vacaciones."},
    ]
  }
}

import { Component } from '@angular/core';
import { Empleado } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Lista de empleados';

  empleados: Empleado[]=[
    new Empleado("Elias", "Paladino", "Presidente", 7000),
    new Empleado("Maria", "Rojas", "Vice presidente", 5000),
    new Empleado("Romina", "Mernes", "Jefa", 4000),
    new Empleado("Juan", "Ramirez", "Administrativo", 3000),
  ];

  inputNombre: string = "";
  inputApellido: string = "";
  inputPuesto: string = "";
  inputSueldo: number = 0;

  crearEmpleado() {
    let empleadoNuevo = new Empleado(this.inputNombre, this.inputApellido, this.inputPuesto, this.inputSueldo);
    this.empleados.push(empleadoNuevo);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  template: `
    <form style="margin-top: 35px;" >
      <input type="text" placeholder="Nombre" name="nombre" style="margin-right: 5px;" [(ngModel)]="nombre">
      <input type="text" placeholder="Apellido" name="apellido" style="margin-right: 5px;" [(ngModel)]="apellido">

      <input type="submit" value="Enviar" (click)="registrarUsuario()">
    </form>

    <p *ngIf="registrado; else sinRegistrar">{{mensaje}}</p>

    <ng-template #sinRegistrar><p>No hay ningun usuario registrado</p></ng-template>
  `,
  styles: [
  ]
})
export class FormularioComponent {
  nombre = "";
  apellido = "";
  mensaje = "";
  registrado = false;

  registrarUsuario() {
    this.registrado = true;
    this.mensaje = "El usuario " + this.nombre + " " + this.apellido + " ha sido creado correctamente.";
  }
}

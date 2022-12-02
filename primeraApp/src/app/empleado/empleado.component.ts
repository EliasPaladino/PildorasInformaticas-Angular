import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css'],

  /* 
  --- Comando para crear componente en linea desde la terminal ---
  ng g c nombreComponente -s -t

  Ejemplo del componente en linea

  template: `
    <h2>
      ¡Soy un empleado!
    </h2>
    `,
  styles: [
    `
      h2 {
        background-color: red;
        text-align: center;
      }
    `,
  ],*/
})
export class EmpleadoComponent {
  nombre = 'Elias';
  apellido = 'Paladino';
  edad = 23;
  empresa = 'The Family Company';

  usuarioRegistrado = false;
  textoRegistro = "No hay nadie registrado";

  getRegistrado() {
    this.usuarioRegistrado = false;
  }

  setUsuarioRegistrado(event: Event) {
    if((<HTMLInputElement>event.target).value == "si") {
      this.textoRegistro = "Usuario registrado correctamente"
    } else {
      this.textoRegistro = "No hay nadie registrado";
    }
  }

  setEmpresa(value: String) {}
}

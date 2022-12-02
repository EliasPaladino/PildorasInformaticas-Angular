import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mini Calculadora';
  
  numero1: number = 2;
  numero2: number = 3;
  resultado: number = 0;

  suma() : void {
    this.resultado = this.numero1 + this.numero2;
  }

  resta() : void {
    this.resultado = this.numero1 - this.numero2;
  }

  multiplicacion() : void {
    this.resultado = this.numero1 * this.numero2;
  }
}

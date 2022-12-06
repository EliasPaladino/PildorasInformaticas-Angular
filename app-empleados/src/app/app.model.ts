export class Empleado {

    constructor( nombre: string, apellido: string, puesto: string, saldo: number ) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.puesto = puesto;
        this.saldo = saldo;
    }

    nombre: string = "";
    apellido: string = "";
    puesto: string = "";
    saldo: number = 0;

}
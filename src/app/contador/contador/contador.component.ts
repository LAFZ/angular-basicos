import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ titulo }}</h1>
    <button (click)="numero = numero + 1">+1</button>
    <span> {{ numero }} </span>
    <button (click)="numero = numero - 1">-1</button>
    <br />
    <br />
    <button (click)="sumar()">+1</button>
    <span> {{ numero1 }} </span>
    <button (click)="restar()">-1</button>
    <br />
    <br />
    <button (click)="acumular(+1)">+1</button>
    <span> {{ numero2 }} </span>
    <button (click)="acumular(-1)">-1</button>

    <h3>La base es {{ base }}:</h3>
    <button (click)="acumular5(base)">+ {{ base }}</button>
    <span> {{ numero3 }} </span>
    <button (click)="acumular5(-base)">- {{ base }}</button>
  `,
})
export class ContadorComponent {
  titulo = 'Contador App';
  numero: number = 10;
  numero1: number = 10;
  numero2: number = 10;
  numero3: number = 0;
  base: number = 5;

  sumar() {
    this.numero1 += 1;
  }

  restar() {
    this.numero1 -= 1;
  }

  acumular(valor: number) {
    this.numero2 += valor;
  }

  acumular5(valor: number) {
    this.numero3 += valor;
  }
}

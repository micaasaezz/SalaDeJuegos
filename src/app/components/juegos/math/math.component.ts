import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/servicios/server.service';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css']
})
export class MathComponent implements OnInit {
  N1 = 0;
  N2 = 0;
  valor = 100;
  Operador = '+';
  resultado = 0;
  ganador = false;
  tiles: Tile[];
  respuesta = 0;
  aux = 0;
  fallas = 0;
  aciertos = 0;
  constructor(private http: ServerService) { }

  ngOnInit() {
    this.generateNumbers();
    this.ganador = false;
  }


  generateNumbers() {
    this.aux = 100;
    this.N1 = Math.floor(Math.random() * 100);
    this.N2 = Math.floor(Math.random() * 100);
    const oper = Math.floor(Math.random() * 4 ) + 1;
    switch (oper) {
      case 1:
        this.Operador = '+';
        break;
      case 2:
        this.Operador = '-';
        break;
      case 3:
        this.Operador = '*';
        break;
      case 4:
        this.Operador = '/';
        break;
      default:
        this.Operador = '+';
        break;
    }
    this.calcularResultado();
    setTimeout(() => this.timeWhatch(), 100);
    this.timeWhatch();
    this.generarCuadro();

  }

  calcularResultado() {
    switch (this.Operador) {
      case '+':
        this.resultado = this.N1 + this.N2;
        break;
      case '-':
      this.resultado = this.N1 - this.N2;

        break;
      case '*':
      this.resultado = this.N1 * this.N2;

      break;
      case '/':
      this.resultado = this.N1 / this.N2;

        break;
    }
    console.log(this.resultado);

  }

  setDelay(i) {
    setTimeout(function() {
      this.aux = i;
    }, 1000);
  }


  timeWhatch() {
    if (this.aux > 0) {
      this.aux -= 0.10;
      if (this.aux <= 0 && ! this.ganador) {
        this.Perder();
        this.aux = 0;
        return 0;
      } else {
        setTimeout(() => this.timeWhatch(), 100);
      }
    }
  }

  Perder() {
    this.tiles = [
      {text: 'Perdiste', cols: 3, rows: 1, color: 'red'},
      {text: 'Perdiste', cols: 1, rows: 1, color: 'red'},
      {text: 'Perdiste', cols: 1, rows: 1, color: 'red'},
      {text: 'Perdiste', cols: 1, rows: 1, color: 'red'}
    ];
    this.ganador = true;
    this.fallas++;
    this.http.AgregarPuntuacion('agilidad', (this.aciertos - this.fallas).toString() ).subscribe();
  }




  Ganaste() {
    this.tiles = [
      {text: 'Ganaste', cols: 3, rows: 1, color: 'green'},
      {text: 'Ganaste', cols: 1, rows: 1, color: 'green'},
      {text: 'Ganaste', cols: 1, rows: 1, color: 'green'},
      {text: 'Ganaste', cols: 1, rows: 1, color: 'green'}
    ];
    this.ganador = true;
    this.aciertos++;
    this.http.AgregarPuntuacion('agilidad', (this.aciertos - this.fallas).toString() ).subscribe();
  }

  Comprobar() {
    if (this.ganador) {
      return 0;
    }
    if (this.resultado == this.respuesta) {
      this.Ganaste();
    } else {
      this.Perder();
    }
  }

  generarCuadro() {
    this.tiles = [
      {text: 'Agilidad Aritmética', cols: 3, rows: 1, color: '#9dff00'},
      {text: this.N1.toString(), cols: 1, rows: 1, color: 'lightblue'},
      {text: this.Operador, cols: 1, rows: 1, color: 'lightgreen'},
      {text: this.N2.toString(), cols: 1, rows: 1, color: 'lightblue'}
    ];
  }


}

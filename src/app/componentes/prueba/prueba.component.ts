import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss']
})
export class PruebaComponent implements OnInit {
  //Nombre: tipo;
  numero: number;
  constructor() {
  console.trace('BotonComponent constructor');

    this.numero = 0;
   }

  ngOnInit() {
    console.trace('BotonComponent ngOnInit');

  }

}

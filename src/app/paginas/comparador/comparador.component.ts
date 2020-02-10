import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comparador',
  templateUrl: './comparador.component.html',
  styleUrls: ['./comparador.component.scss']
})
export class ComparadorComponent implements OnInit {
/* Ejecutarlo en git (git io)
Sacar un listado y que cuando pinches le pasas el id y sacas el detalle del producto(para "repasar") */
  coches: any;

  constructor() { 
    this.coches= [{
    }];
  }

  seleccionar(cocheSelccionado: any){
    console.debug('Poner a ver si te llega el parametro');

  }

  ngOnInit() {

  }

}

import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss']
})
export class PruebaComponent implements OnInit {
  //Nombre: tipo;
  numero: number;
  numeroClicks: number;
  jugador: string;
  visible: boolean;

  constructor() {
  console.trace('BotonComponent constructor');
    this.visible = false;
    this.jugador = "escribe";
    this.numeroClicks = 0;
    this.numero = 0;
   }// constructor

  ngOnInit() {
    console.trace('BotonComponent ngOnInit');

  }// ngOnInit

  ngOnClick(){
    console.trace('BotonComponent ngOnClick');
  }// ngOnClick


  contarClicks(){
    console.trace('contar click');
    this.numeroClicks++;
  }//contarClicks

  decirAdios(){
    console.trace('Sayonaraaa onii-chan');
    this.visible = true;
  }

}// PruebaComponent

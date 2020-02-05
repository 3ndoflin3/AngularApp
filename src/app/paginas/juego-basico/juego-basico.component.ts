import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

const TIEMPO_JUEGO = 2000;

@Component({
  selector: 'app-juego-basico',
  templateUrl: './juego-basico.component.html',
  styleUrls: ['./juego-basico.component.scss']
})
export class JuegoBasicoComponent implements OnInit {

  numeroClicks: number;
  ranking: Map<string, number>
  activado: boolean;
  jugador: string;

  constructor() { 
    this.numeroClicks = 0;
    this.activado = false;
    this.jugador = '';
    this.ranking = new Map();
  }

  ngOnInit() {
    console.trace('juego BASICOOOOOOOO');
  }

  contarClicks(){

    console.trace('contar click');
    if(this.activado){
      this.numeroClicks++;
    }else{
      console.log('El boton para contar esta desactivado');
    }

  }//contarClicks

  iniciar() {
      this.activado = true;
      
      setTimeout(()=> {
        this.ranking.set(this.jugador, this.numeroClicks);
        this.activado = false;
        this.numeroClicks = 0;
        this.jugador = '';
    }, TIEMPO_JUEGO);
    
  }//​iniciar


}

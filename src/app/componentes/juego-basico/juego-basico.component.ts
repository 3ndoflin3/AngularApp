import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juego-basico',
  templateUrl: './juego-basico.component.html',
  styleUrls: ['./juego-basico.component.scss']
})
export class JuegoBasicoComponent implements OnInit {

  numeroClicks: number;

  constructor() { 
    this.numeroClicks = 0;

  }

  ngOnInit() {
    console.trace('juego BASICOOOOOOOO');
  }

  contarClicks(){
    console.trace('contar click');
    this.numeroClicks++;
  }//contarClicks


}

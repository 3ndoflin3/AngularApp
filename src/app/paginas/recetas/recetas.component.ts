import { Component, OnInit } from '@angular/core';
import {RECETAS} from 'src/app/paginas/recetas/recetas';
@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.scss']
})
export class RecetasComponent implements OnInit {

  recetas: Array<any>;
  rSeleccionado: Array<any>;
  constructor() { 
    console.log('Constructor Recetas');
  }
  
  ngOnInit() {
    console.log('On init Recetas');
    this.recetas = RECETAS;

  }

  seleccionarReceta(receta){
    this.rSeleccionado = receta;

  }

}

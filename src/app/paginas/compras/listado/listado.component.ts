import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { Fruta } from 'src/app/model/frutas.model';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  @Input() frutas: Array<Fruta>;
  @Output() pasameFruta = new EventEmitter();
  
  frutaSeleccionada: Fruta;

  constructor() {
    this.frutas = new Array<Fruta>();
    this.frutaSeleccionada = new Fruta();
  }

  ngOnInit() {

  }


  lanzar(event, fruta){
    // Usamos el método emit
    this.frutaSeleccionada = fruta;
    this.pasameFruta.emit(this.frutaSeleccionada);
  } 



}

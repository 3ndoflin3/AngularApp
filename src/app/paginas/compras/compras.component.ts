import { Component, OnInit } from '@angular/core';
import { Fruta } from 'src/app/model/frutas.model';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.scss']
})
export class ComprasComponent implements OnInit {

  frutaSeleccionada: Fruta;
  frutas: Array<Fruta>;


  constructor() {
    this.frutas = [];
    
    this.frutas.push(new Fruta('Banana', 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/89/89f6ff262c7a641f5276f624f319f7a3c615b995_full.jpg'));
    this.frutas.push(new Fruta('Bokoya', 'assets/imagenes/bokoya.jpg'));
    this.frutas.push(new Fruta('Qyucumba', 'https://pbs.twimg.com/media/EFYC11pXkAAlfgl.jpg'));
    this.frutaSeleccionada = new Fruta();
   }

  ngOnInit() {

  }


  recogerEvento(event){
    console.debug('Soy el papuh y recibo la fruta %o', event);
    this.frutaSeleccionada = event;
  }

}

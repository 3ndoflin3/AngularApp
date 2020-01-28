import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.component.html',
  styleUrls: ['./arrays.component.scss']
})
export class ArraysComponent implements OnInit {
  
  frutas: any;
  total: number;
  totalDescuento: number;
  aSoloNombres: Array<string>;
  frutasConDescuento: Array<string>;
  frutasAmarillas: Array<string>;
  frutasAmarillasPrecioTotal: number;
  frutaVerde: string;
  arrayColores: Set<string>;
  unique: any;
  color: string;

  //Mapear el precio con descuento en las frutas que tengan descuentos
  constructor() {
    console.trace('ArraysCOmponent m8');
    this.total = 0;
    this.frutas = [
      {'nombre': 'fresa', 'precio': 2.45, 'descuento': 0, 'colores': ['roja']},
      {'nombre': 'pera', 'precio': 3.50, 'descuento': 10, 'colores': ['amarillo', 'verde']},
      {'nombre': 'manzana', 'precio': 1.99, 'descuento': 50, 'colores': ['amarillo', 'verde', 'roja']}
    ];
    this.aSoloNombres = [];
  }
  
  ngOnInit() {
    let pre = document.getElementById('pre');
    //let total = document.getElementById('total');
    pre.innerHTML = ''; 
   // total.innerHTML = ''; 
    this.frutas.forEach(element => {
      console.log(element.nombre);
      pre.innerHTML += '<p>'+ element.nombre + '</p>';
      //total.innerHTML+=parseInt(element.precio);
    });
    //Modo extendido para poder depurar
    this.total = this.frutas.map(el => {
      console.debug(el);
      return el.precio;
    }).reduce((previous, current) =>{
      console.debug(previous, current);
      return previous + current;
    });


    this.unique= (value, index, self) =>{
      return self.indexOf(value) === index;
    };
  
    //Modo reducido
    this.aSoloNombres = this.frutas.map(el => el.nombre);
    this.total = this.frutas.map(el => el.precio).reduce((p, c) => p+c);
    this.totalDescuento = this.frutas.reduce((p,c) => (p+ (c.precio - (c.precio * c.descuento)/100)), 0);
    this.frutasConDescuento = this.frutas.filter(fruta => fruta.descuento > 0).map(el => el.nombre);
    this.frutasAmarillas = this.frutas.filter(fruta => fruta.colores.includes('amarillo')).map(fruta => fruta.nombre);
    this.frutasAmarillasPrecioTotal = this.frutas.filter(fruta => fruta.colores.includes('amarillo')).map(fruta => fruta.precio).reduce((p, c) => p + c);
    this.frutaVerde = this.frutas.find((fruta) => fruta.colores.includes('verde'));
    //this.arrayColores = this.frutas.map((fruta) => fruta.colores ).join(', ').unique();
    this.arrayColores = new Set(this.frutas.reduce((p, c, i, a)=> {return p.concat(c.colores)}, []));
    this.color= JSON.stringify(new Set(this.frutas.reduce((p, c, i, a)=> {return p.concat(c.colores)}, [])));
    //this.arrayColores = Array.from(new Set(this.frutas.map((item: any) => item.colores)));
    console.log(this.arrayColores);
  }

}

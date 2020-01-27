import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.component.html',
  styleUrls: ['./arrays.component.scss']
})
export class ArraysComponent implements OnInit {

  frutas: any;

  constructor() {
    console.trace('ArraysCOmponent m8');
    this.frutas = [
      {'nombre': 'fresa', 'precio': 2.45},
      {'nombre': 'pera', 'precio': 4.20},
      {'nombre': 'manzana', 'precio': 1.99}
 
    ];
   }

  ngOnInit() {
  }

}

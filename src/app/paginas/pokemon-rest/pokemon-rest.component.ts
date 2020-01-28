import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-rest',
  templateUrl: './pokemon-rest.component.html',
  styleUrls: ['./pokemon-rest.component.scss']
})
export class PokemonRestComponent implements OnInit {

  constructor() { 
    console.trace('PokemonRestComponent');
  }

  ngOnInit() {
    console.trace('PokemonRestComponent INIT');
  }

}

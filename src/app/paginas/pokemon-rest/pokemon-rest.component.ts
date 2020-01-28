import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/model/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-rest',
  templateUrl: './pokemon-rest.component.html',
  styleUrls: ['./pokemon-rest.component.scss']
})
export class PokemonRestComponent implements OnInit {

  pokemon: Pokemon;

  constructor(private pokemonService: PokemonService) { 
    console.trace('PokemonRestComponent');
    this.pokemon = new Pokemon('pikachu');
    //this.pokemon.nombre = 'pikachu'; SETTER
    this.pokemon.imagen = 'https://pbs.twimg.com/media/DrhSSbNVAAALbRu.jpg';
    this.pokemon.id = 2;

    console.debug(this.pokemon);
  }

  ngOnInit() {
    console.trace('PokemonRestComponent INIT');
  //llamadas a los servicios

  // a un Observable hay que Subscribirse
  // cuando llamamos a un Observable tenemos 3 posibles metodos
  // solo 1 cuanto es obligatorio

  this.pokemonService.getPokemon('pikachu').subscribe(
    data =>  {
      console.debug('peticion correcta data %o', data);
      //mapear de JSON a Pokemon usar solo los datos de la clase Pokemon
      
    },
    error =>  {
      console.debug('peticion erronea %o', error);

    },
    () =>  {
      console.trace('Esto se hace 100pre');

    }

  );

  }

}

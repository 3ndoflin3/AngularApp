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
  mensaje: string;

  constructor(private pokemonService: PokemonService) { 
    console.trace('PokemonRestComponent');
    this.mensaje = '';
    this.pokemon = new Pokemon('pikachu');
    //this.pokemon.nombre = 'pikachu'; SETTER
    this.pokemon.imagen = 'https://pbs.twimg.com/media/DrhSSbNVAAALbRu.jpg';


    console.debug(this.pokemon);
  }

  ngOnInit() {
    console.trace('PokemonRestComponent INIT');
  //llamadas a los servicios

  // a un Observable hay que Subscribirse
  // cuando llamamos a un Observable tenemos 3 posibles metodos
  // solo 1 cuanto es obligatorio

  this.pokemonService.getPokemon('charizard').subscribe(
    data =>  {
      console.debug('peticion correcta data %o', data);
      this.pokemon.id = data.id;
      this.pokemon.nombre = data.name;
      this.pokemon.imagen = data.sprites.front_default;
      //this.pokemon.habilidad = data.abilities[0].ability.name;
      data.abilities.forEach(element => {
        console.log(element.ability.name);
      });

      this.pokemon.habilidad = data.abilities[0].ability.name;
      this.pokemon.url = data.abilities[0].ability.url;
      //mapear de JSON a Pokemon usar solo los datos de la clase Pokemon

      this.pokemonService.getHabilidad( data.abilities[0].ability.url).subscribe(
        data =>  {
          this.mensaje = data.names.find( el => el.language.name === 'es');
          console.debug('peticion suksesful %o', data);
          console.log(this.mensaje);
          const habilidadesNames = data.ability.map( el => el.ability.name);
          console.debug('Habilidades %o', habilidadesNames);
          //mapear de JSON a Pokemon usar solo los datos de la clase Pokemon
          
        },
        error =>  {
          this.mensaje = 'No existe el pokemon X';
          console.debug('peticion erronea %o', error);
    
        },
        () =>  {
          console.trace('Esto se hace 100pre');
        }
      );
      
    },
    error =>  {
      this.mensaje = 'No existe el pokemon X';
      console.debug('peticion erronea %o', error);

    },
    () =>  {

      console.trace('Esto se hace 100pre');
      
    }

  );


    
  }

}

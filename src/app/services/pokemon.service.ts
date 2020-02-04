import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPokemonService } from './Ipokemon.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService implements IPokemonService{

  
  constructor(private http: HttpClient) { 
    console.trace('PokemonService constructor');
  }
  
  getPokemon(nombre: string): Observable<any>{
    const url = `https://pokeapi.co/api/v2/pokemon/${nombre}/`;
    console.trace('PokemonService getPokemon ' + url);
    return this.http.get(url);
  }
  
  getAll(){
    throw new Error('Method not implemented');
  }
  
  getCaracteristicas(id: number): Observable<any> {
    throw new Error("Method not implemented.");
  }

  getHabilidad(nombreHabilidad: string): Observable<any>{
    //const url = `https://pokeapi.co/api/v2/pokemon/ability/${nombreHabilidad}`;
    const url = `${nombreHabilidad}`;
    console.debug('GetHabilidad %o', url);
    return this.http.get(url);
  }

}

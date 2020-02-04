import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PruebaComponent} from './componentes/prueba/prueba.component';
import {ArraysComponent} from './paginas/arrays/arrays.component';
import { PokemonRestComponent } from './paginas/pokemon-rest/pokemon-rest.component';
import { EstilosComponent } from './paginas/estilos/estilos.component';
import { JuegoBasicoComponent } from './componentes/juego-basico/juego-basico.component';

/**
 * Definir las rutas de la app de angular
 * El path debe coincidir con [routerLink] del componente navbar
 * 
 */
 
const routes: Routes = [
  {path: '', component: PruebaComponent},
  {path: 'juego', component: ArraysComponent},
  {path: 'pokemon', component: PokemonRestComponent},
  {path: 'estilos', component: EstilosComponent},
  {path: 'juego-basico', component: JuegoBasicoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

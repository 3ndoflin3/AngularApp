import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PruebaComponent} from './componentes/prueba/prueba.component';
import {ArraysComponent} from './paginas/arrays/arrays.component';
import { PokemonRestComponent } from './paginas/pokemon-rest/pokemon-rest.component';
import { EstilosComponent } from './paginas/estilos/estilos.component';
import { JuegoBasicoComponent } from './paginas/juego-basico/juego-basico.component';
import { DirectivasComponent } from './paginas/directivas/directivas.component';
import { FiltrosComponent } from './paginas/filtros/filtros.component';
import { RecetasComponent} from './paginas/recetas/recetas.component';


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
  {path: 'juego-basico', component: JuegoBasicoComponent},
  {path: 'directivas', component: DirectivasComponent},
  {path: 'filtros', component:FiltrosComponent},
  {path: 'recetas', component: RecetasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

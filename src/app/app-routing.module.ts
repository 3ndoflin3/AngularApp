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
import { Error404Component } from './paginas/error404/error404.component';
import { SaludarComponent } from './paginas/saludar/saludar.component';
import { TareasComponent } from './paginas/tareas/tareas.component';
import { PrivadoComponent } from './paginas/privado/privado.component';
import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './paginas/login/login.component';


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
  {path: 'recetas', component: RecetasComponent},
  {path: 'tareas', component: TareasComponent},
  {path: 'privado', component: PrivadoComponent, canActivate: [LoginGuard]},
  {path: 'login', component: LoginComponent},
  /* (:pNombre) los : sirven para indicar que es un parametro */
  {path: 'saludar/:pNombre', component: SaludarComponent},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

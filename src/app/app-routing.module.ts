import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PruebaComponent} from './componentes/prueba/prueba.component';
import {ArraysComponent} from './paginas/arrays/arrays.component';

/**
 * Definir las rutas de la app de angular
 * El path debe coincidir con [routerLink] del componente navbar
 * 
 */
 
const routes: Routes = [
  {path: '', component: PruebaComponent},
  {path: 'juego', component: ArraysComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

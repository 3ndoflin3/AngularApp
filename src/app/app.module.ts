import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaComponent } from './componentes/prueba/prueba.component';
import { HttpClientModule } from '@angular/common/http';
import { ArraysComponent } from './paginas/arrays/arrays.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PokemonRestComponent } from './paginas/pokemon-rest/pokemon-rest.component';
import { EstilosComponent } from './paginas/estilos/estilos.component';
import { JuegoBasicoComponent } from './paginas/juego-basico/juego-basico.component';
import { DirectivasComponent } from './paginas/directivas/directivas.component';
import { FiltrosComponent } from './paginas/filtros/filtros.component';
import { HelloDirective } from './directives/hello.directive';
import { SubrayarDirective } from './directives/subrayar.directive';
import { AnimalesPipe } from './pipes/animales.pipe';
@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    ArraysComponent,
    NavbarComponent,
    PokemonRestComponent,
    EstilosComponent,
    JuegoBasicoComponent,
    DirectivasComponent,
    FiltrosComponent,
    HelloDirective,
    SubrayarDirective,
    AnimalesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //Modulo para llamadas por HTTP
    FormsModule // Modulo para usar formularios
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

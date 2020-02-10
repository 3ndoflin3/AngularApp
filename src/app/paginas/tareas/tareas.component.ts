import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/model/tarea';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent implements OnInit {

  tareas: Array<Tarea>;
  tituloNuevo: string;

  constructor(private servicioTarea: TareasService) { 
    console.trace('constructor tareas');
    this.tituloNuevo = '';
    this.tareas = []; //Inicializar el array
  }/* constructor */

  ngOnInit() {
    console.trace('ngOnInit tareas');
    this.cargarTareas();
  }/* ngOnInit */

  editarEstado(tarea: Tarea){
    console.debug('click %o ', tarea);
    tarea.completada = !tarea.completada;
    this.servicioTarea.modificar(tarea).subscribe( () => this.cargarTareas());
  }/* editarEstado */


  private cargarTareas(): void{

  console.trace('cargarTareas');

    //Llamar al service para obtener tareas
    this.servicioTarea.listar().subscribe(datos => {
      console.debug('esto se ejecuta de forma asincrona');
      this.tareas = datos;

    });
  }/* cargarTareas */
  private eliminarTarea(tarea: Tarea): void{
    console.trace('eliminarTarea');

    if ( confirm('¿Estas seguro?') ) {
      console.trace('Confirmado eliminacion');
      this.servicioTarea.eliminar( tarea ).subscribe( () => this.cargarTareas() );
    } else {
      console.trace('Cancelado eliminacion');
    }
  }/* eliminarTarea */

  nuevaTarea() : void{
    console.debug('click nueva tarea %s', this.tituloNuevo);

    // crear objeto Tarea
    const tNueva = new Tarea();
    tNueva.titulo = this.tituloNuevo;
    console.debug(tNueva);

    this.servicioTarea.crear(tNueva).subscribe( data => {
      console.debug('Nueva Tarea creada en json-server %o', data);
      this.tituloNuevo = '';
      this.cargarTareas();
    });
  }/* nuevaTarea */



  focusIn(): void{
    console.trace('FOCUS ENTERED');
  }

  focusOut(): void{
    console.trace('FOCUS EXIT');
  }

}/* TareasComponent */

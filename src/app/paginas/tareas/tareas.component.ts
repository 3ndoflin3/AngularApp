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

  constructor(private servicioTarea: TareasService) { 
    console.trace('constructor tareas');
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
  }
  private eliminarTarea(tarea: Tarea): void{

  console.trace('cargarTareas');


    if(confirm()){
      console.trace('Eliminacion confirmada');

    }else{
      console.trace('Eliminacion cancelada');  
      
    }

    //Llamar al service para obtener tareas
    this.servicioTarea.eliminar(tarea.id).subscribe(() => {
      console.debug('esto se ejecuta de forma asincrona');
      this.cargarTareas();

    });
  }

}/* TareasComponent */

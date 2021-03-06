import { Observable } from "rxjs";
import { Tarea } from '../model/tarea';

export interface ITareasService{

    listar(): Observable<Array<Tarea>>;

    detalle( id: number): Observable<Tarea>;

    /**
     * Crear nueva tarea
     * @param tarea tarea a dar de alta 
     * @return un Observable con la tarea dada de alta e ID actualizado
     */
    crear(tarea: Tarea): Observable<Tarea>;


    modificar(tarea: Tarea): Observable<Tarea>;

    eliminar( tarea: Tarea): Observable<Tarea>;

}
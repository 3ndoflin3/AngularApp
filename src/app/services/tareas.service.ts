import { Injectable } from '@angular/core';
import { ITareasService } from './ITareas.service';
import { Observable, from } from 'rxjs';
import { Tarea } from '../model/tarea';
import { HttpClient } from '@angular/common/http';
import {url} from '../global';
@Injectable({
  providedIn: 'root'
})
export class TareasService implements ITareasService{
  
 
  constructor(private http: HttpClient) { 

  }

  listar(): Observable<Tarea[]> {
    console.debug('GET %s', url);

    return this.http.get<Array<Tarea>>(url);

  }
  detalle(id: number): Observable<any> {
    throw new Error("Method not implemented.");
  }
  crear(tarea: Tarea): Observable<any> {
    throw new Error("Method not implemented.");
  }
  modificar(tarea: Tarea):Observable<any> {

    console.debug('modificar %o', tarea);

    return this.http.put(url, tarea);
  }
  
  eliminar(id: number): Observable<any> {
    console.debug('DELETE %s', url);

    return this.http.delete<Array<Tarea>>(url);

  }


}

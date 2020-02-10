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
    return this.http.post<Tarea>(url, tarea);
  }
  modificar(tarea: Tarea):Observable<any> {
    const url_put = url + '/' + tarea.id;
    console.debug('Put %s modificar %o', url_put, tarea);
    return this.http.put<Tarea>(url_put, tarea);
  }

  eliminar(tarea: Tarea): Observable<any> {
    const url_delete = url + '/' + tarea.id;
    console.debug('Put %s modificar %o', url_delete, tarea);
    return this.http.delete<Tarea>(url_delete);
  }


}

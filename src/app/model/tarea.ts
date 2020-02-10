import { HttpClient } from '@angular/common/http';

interface ITarea{

    id: number;
    titulo: string;
    completada: boolean;

}

export class Tarea implements ITarea{
    
    id: number;    
    titulo: string;
    completada: boolean;

    /* Importar el que tiene http 1 vez */
    constructor(){
        console.trace('Tareas Constructor');
        this.id = 0;
        this.titulo = '';
        this.completada = false;
    }/* constructor */

}
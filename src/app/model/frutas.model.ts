import { Color } from './color.model';



export class Fruta{

    id: number;
    nombre: string;
    precio: number;
    colores: Array<Color>;
    imagen: string;

    constructor(nombre?:string, imagen?:string){
        this.id = 0;
         // Si el nombre esta definido le asigna el nombre y si no pue na 
         //Compara el nombre != undefined 
        this.nombre = (nombre) ? nombre : '';

        this.imagen = imagen;
        this.precio = 0;
        this.colores = new Array<Color>();
        
    }


}
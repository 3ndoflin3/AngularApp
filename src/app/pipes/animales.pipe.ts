import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'animales'
})
export class AnimalesPipe implements PipeTransform {
  
  
  transform(datos: any, busqueda: string): any {
    console.trace('--------------------Comienza el PIPE---------------------'); 
    console.debug(datos);
    console.debug(busqueda);
    console.trace('--------------------Termina el PIPE---------------------'); 
    const resultado = datos.filter( (el) =>{
      console.debug(el);
      const nombre = el.Nombre;
      return nombre.includes(busqueda);
    })
    return resultado;
  }

}

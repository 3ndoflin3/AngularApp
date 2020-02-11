import { Injectable } from '@angular/core';
import { IUsuarioService } from './IUsuario.service';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService implements IUsuarioService{
  
  isLogged: boolean;
  usuario: Usuario;
  constructor() { 
    console.trace('UsuarioService constructor');
    this.isLogged = false;
    this.usuario = undefined;
  }/* constructor */


  estaLogeado(): boolean {
      throw new Error("Method not implemented.");
  }

  login(usuario: Usuario): Usuario {
    console.trace('UsuarioService login nombre %s password %s', usuario.nombre, usuario.password);
    const  NOMBRE = 'admin';
    const  PASS = 'admin';
    let usuarioBuscar = undefined;

    if(NOMBRE === usuario.nombre && PASS === usuario.password){
      usuarioBuscar = new Usuario();
      usuarioBuscar.nombre = usuario.nombre;
      usuarioBuscar.password = usuario.password;
      usuarioBuscar.id = 99;
      this.isLogged = true;
    
    }else{
      console.trace('');
      this.isLogged = false;
    }


    return this.usuario;
  }

  cerrarSesion(idUsuario: number) {

    console.trace('UsuarioService cerrarSesion')
    this.isLogged = false;
  }


}

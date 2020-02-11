import { Usuario } from '../model/usuario';

export interface IUsuarioService{
    
    estaLogeado(): boolean;

    /**
     * 
     * @param usuario 
     * @returns El usuario logeado, si no lo encuentra te devuelve undefined
     */
    login(usuario: Usuario): Usuario;


    cerrarSesion( idUsuario : number);


}   

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuarios.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;
  usuario: Usuario;
  constructor(private router: Router,
    private builder: FormBuilder,
    private usuarioService: UsuarioService) { 
    console.trace('LoginComponent constructor');

    //construir formulario
    this.formulario = this.builder.group({
        //Definir los formcontrol == inputs [value, validaciones]
        nombre : ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
        password: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]] 
    });
  }

  ngOnInit() {

  }

  enviar( values: any ) {
    console.trace('Submit formulario %o', values);

    const nombre = values.nombre;
    const password = values.pass;
    this.usuario = new Usuario();
    this.usuario.nombre = nombre;
    this.usuario.password = password;
    const uLogeado = this.usuarioService.login(this.usuario);

    if ( uLogeado ) {
      console.trace('Usuario logeado con exito %o', uLogeado);
      this.router.navigate(['privado']);
    } else {
      console.warn('Usuario NO logeado');
      // TODO cambiar alert
      alert('Por favor prueba de nuevo a logearte');
    }


  }// enviar




/* Poner el click en el elemento del navbar con un ngIf para cerrar sesion  */
  salir(){
    console.trace('NavbarComponent click boton cerrar sesion');
    const mensaje = '¿Estas seguro de querer cerrar sesion?';

    if(confirm(mensaje)){

    }
  }





}

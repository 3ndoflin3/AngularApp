import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;

  constructor(private builder: FormBuilder) { 
    console.trace('LoginComponent constructor');

    //construir formulario
    this.formulario = this.builder.group({
        //Definir los formcontrol == inputs [value, validaciones]
        nombre : ['', Validators.required, Validators.minLength(2), Validators.maxLength(100)],
        password: ['', Validators.required, Validators.minLength(2), Validators.maxLength(100)] 
    });
  }

  ngOnInit() {

  }

  enviar( values: any){
    console.trace('enviar formulario %o', values);

  }

}

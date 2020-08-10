import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Constantes } from 'src/constantes/constantes';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.scss']
})
export class IngresoComponent implements OnInit {

  constantes = Constantes;
  ingreso: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.crearFormulario();
   }

  ngOnInit() {
  }

  crearFormulario() {
    this.ingreso = this.formBuilder.group({
      correo: [null, [Validators.required, Validators.pattern(this.constantes.regex.patternMail)]],
      contrasenia: [null, Validators.required]
    });
  }

  get correoNoValido() {
    return this.ingreso.get('correo').invalid && this.ingreso.get('correo').touched;
  }
  get contraseniaNoValido() {
    return this.ingreso.get('contrasenia').invalid && this.ingreso.get('contrasenia').touched;
  }

}

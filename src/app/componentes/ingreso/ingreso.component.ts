import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.scss']
})
export class IngresoComponent implements OnInit {

  ingreso: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.crearFormulario();
   }

  ngOnInit() {
  }

  crearFormulario() {
    this.ingreso = this.formBuilder.group({
      correo: [null, Validators.required],
      contrasenia: [null, Validators.required]
    });
  }

}

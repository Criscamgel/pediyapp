import { Component, OnInit, Input } from '@angular/core';
import { Constantes } from 'src/constantes/constantes';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-susdatos',
  templateUrl: './susdatos.component.html',
  styleUrls: ['./susdatos.component.scss']
})
export class SusdatosComponent implements OnInit {

  susDatos: FormGroup;
  constantes = Constantes;

  constructor( public formBuilder: FormBuilder) {
    this.crearFormulario();
  }

  ngOnInit() {
  }

  crearFormulario() {
    this.susDatos = this.formBuilder.group({
      nombres: [null, Validators.required],
      celular: [null, Validators.required],
      direccion: [null, Validators.required]
    });

}

}

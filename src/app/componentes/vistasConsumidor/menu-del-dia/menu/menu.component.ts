import { Component, OnInit } from '@angular/core';
import { Constantes } from '../../../../../constantes/constantes';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PedidoServicioService } from 'src/app/servicios/pedido-servicio.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constantes = Constantes;
  opcionesCorriente: FormGroup;
  plato = {
        tipoPlato: 'corriente',
        plato: {
          entrada: {},
          principio: {},
          proteina: {},
          bebida: {}
        },
        comentarios: ''
  };

  constructor( public formBuilder: FormBuilder, public pedidoServicio: PedidoServicioService ) {
    this.crearFormulario();

  }

  ngOnInit() {
  }

  crearFormulario() {

    this.opcionesCorriente = this.formBuilder.group({
      entrada: [null, Validators.required],
      principio: [null, Validators.required],
      proteina: [null, Validators.required],
      bebida: [null, Validators.required],
      comentarios: ['']
    });

    /* Observables */

    this.opcionesCorriente.controls['entrada'].valueChanges.subscribe(value => this.plato.plato.entrada = this.constantes.menuCorriente[0].opciones[value - 1]);
    this.opcionesCorriente.controls['principio'].valueChanges.subscribe(value => this.plato.plato.principio = this.constantes.menuCorriente[1].opciones[value - 1]);
    this.opcionesCorriente.controls['proteina'].valueChanges.subscribe(value => this.plato.plato.proteina = this.constantes.menuCorriente[2].opciones[value - 1]);
    this.opcionesCorriente.controls['bebida'].valueChanges.subscribe(value => this.plato.plato.bebida = this.constantes.menuCorriente[3].opciones[value - 1]);
    this.opcionesCorriente.controls['comentarios'].valueChanges.subscribe(value => this.plato.comentarios = value);
  }

  enviarPlato() {
    console.log(this.plato);
  }

  platoIgual() {
    this.pedidoServicio.pedido.platos.push(this.plato);
    this.crearFormulario();
    this.pedidoServicio.barraNotifica.visible = true;
    this.pedidoServicio.setBarraNotifica('tu plato ha sido añadido', 'Correcto');
    window.scroll(0, 0);
  }

}

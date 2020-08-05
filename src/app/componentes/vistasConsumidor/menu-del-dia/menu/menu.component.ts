import { Component, OnInit } from '@angular/core';
import { Constantes } from '../../../../../constantes/constantes';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { PedidoServicioService } from 'src/app/servicios/pedido-servicio.service';
import { PlatoCorriente } from 'src/app/interfaces/plato-corriente';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constantes = Constantes;
  opcionesCorriente: FormGroup;

  plato: PlatoCorriente = {
    tipoPlato: 'corriente',
    plato: {
      entrada: {
        id: null,
        nombre: null
      },
      principio: {
        id: null,
        nombre: null
      },
      proteina: {
        id: null,
        nombre: null
      },
      bebida: {
        id: null,
        nombre: null
      }
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
    this.opcionesCorriente.controls['entrada'].valueChanges.subscribe(value => {
        this.plato.plato.entrada = this.constantes.menuCorriente[0].opciones[value - 1];
    });
    this.opcionesCorriente.controls['principio'].valueChanges.subscribe(value => {
         this.plato.plato.principio = this.constantes.menuCorriente[1].opciones[value - 1];
    });
    this.opcionesCorriente.controls['proteina'].valueChanges.subscribe(value => {
       this.plato.plato.proteina = this.constantes.menuCorriente[2].opciones[value - 1];
    });
    this.opcionesCorriente.controls['bebida'].valueChanges.subscribe(value => {
       this.plato.plato.bebida = this.constantes.menuCorriente[3].opciones[value - 1];
    });
    this.opcionesCorriente.controls['comentarios'].valueChanges.subscribe(value => {
       this.plato.comentarios = value;
    });
  }

  sumarPlato() {
    const plato = (JSON.parse(JSON.stringify(this.plato)));
    this.pedidoServicio.barraNotifica.visible = true;
    this.pedidoServicio.pedido.platos.push(plato);
    this.pedidoServicio.setBarraNotifica('Tu plato ha sido añadido', 'ok');
    window.scroll(0, 0);
  }
  restarPlato() {
    this.pedidoServicio.pedido.platos.pop();
    this.pedidoServicio.barraNotifica.visible = true;
    this.pedidoServicio.setBarraNotifica('Tu plato ha sido eliminado', 'ok');

    const ultimo = this.pedidoServicio.pedido.platos.length-1;
    console.log(ultimo);
    console.log(this.pedidoServicio.pedido.platos[ultimo]);
    if (ultimo > 0) {
    this.opcionesCorriente.value['entrada'] = this.pedidoServicio.pedido.platos[ultimo].plato.entrada.id;
    this.opcionesCorriente.value['principio'] = this.pedidoServicio.pedido.platos[ultimo].plato.principio.id;
    this.opcionesCorriente.value['proteina'] = this.pedidoServicio.pedido.platos[ultimo].plato.proteina.id;
    this.opcionesCorriente.value['bebida'] = this.pedidoServicio.pedido.platos[ultimo].plato.bebida.id;
    this.opcionesCorriente.value['comentarios'] = this.pedidoServicio.pedido.platos[ultimo].comentarios;
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Constantes } from '../../../../../constantes/constantes';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { PedidoServicioService } from 'src/app/servicios/pedido-servicio.service';
import { PlatoCorriente } from 'src/app/interfaces/plato-corriente';
import { Router } from '@angular/router';

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
    costo: this.constantes.costo,
    comentarios: ''
  };

  constructor( public formBuilder: FormBuilder, public pedidoServicio: PedidoServicioService, private router: Router) {
    this.crearFormulario();
    this.changeOpcionesCorrienteValid();

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
        this.changeOpcionesCorrienteValid();
    });
    this.opcionesCorriente.controls['principio'].valueChanges.subscribe(value => {
         this.plato.plato.principio = this.constantes.menuCorriente[1].opciones[value - 1];
         this.changeOpcionesCorrienteValid();
    });
    this.opcionesCorriente.controls['proteina'].valueChanges.subscribe(value => {
       this.plato.plato.proteina = this.constantes.menuCorriente[2].opciones[value - 1];
       this.changeOpcionesCorrienteValid();
    });
    this.opcionesCorriente.controls['bebida'].valueChanges.subscribe(value => {
       this.plato.plato.bebida = this.constantes.menuCorriente[3].opciones[value - 1];
       this.changeOpcionesCorrienteValid();
    });
    this.opcionesCorriente.controls['comentarios'].valueChanges.subscribe(value => {
       this.plato.comentarios = value;
       this.changeOpcionesCorrienteValid();
    });
  }

  sumarPlato() {
    const plato = (JSON.parse(JSON.stringify(this.plato)));
    this.pedidoServicio.barraNotifica.visible = true;
    this.pedidoServicio.pedido.platos.push(plato);
    this.pedidoServicio.setBarraNotifica('Tu plato ha sido añadido', 'ok');
    window.scroll(0, 0);
    this.pedidoServicio.setPlatos();
  }
  restarPlato() {
    this.pedidoServicio.pedido.platos.pop();
    this.pedidoServicio.barraNotifica.visible = true;
    this.pedidoServicio.setBarraNotifica('Tu plato ha sido eliminado', 'ok');
    this.pedidoServicio.setPlatos();
  }

  changeOpcionesCorrienteValid() {
      setTimeout(() => {

        if (this.opcionesCorriente.valid && this.pedidoServicio.pedido.platos.length === 0) {
          const plato = (JSON.parse(JSON.stringify(this.plato)));
          this.pedidoServicio.pedido.platos.push(plato);
          this.pedidoServicio.setPlatos();
        }
      }, 100);
  }

  iraSusDatos() {
    this.router.navigateByUrl('/menudeldia/susdatos');
  }

}

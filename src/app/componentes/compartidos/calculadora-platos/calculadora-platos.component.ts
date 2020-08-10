import { Component, OnInit, Input } from '@angular/core';
import { Constantes } from 'src/constantes/constantes';
import { PedidoServicioService } from 'src/app/servicios/pedido-servicio.service';

@Component({
  selector: 'app-calculadora-platos',
  templateUrl: './calculadora-platos.component.html',
  styleUrls: ['./calculadora-platos.component.scss']
})
export class CalculadoraPlatosComponent implements OnInit {

  const = Constantes;

  constructor(public pedidoServicio: PedidoServicioService) {
    this.getObservablePlatos();
   }

   getObservablePlatos() {
    this.pedidoServicio.obsPlatos.subscribe( () => {
      this.pedidoServicio.pedido.totalPedido = 0;
      if (this.pedidoServicio.pedido.platos.length > 0) {
        this.pedidoServicio.pedido.platos.forEach(plato => {
          this.pedidoServicio.pedido.totalPedido += plato.costo.valor;
        });
      }
    });
   }

  ngOnInit() {
  }

}

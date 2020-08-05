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

  constructor(public pedidoServicio: PedidoServicioService) { }

  ngOnInit() {
  }

}

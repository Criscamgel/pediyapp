import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PedidoServicioService } from 'src/app/servicios/pedido-servicio.service';

@Component({
  selector: 'app-barranotificacion',
  templateUrl: './barranotificacion.component.html',
  styleUrls: ['./barranotificacion.component.scss']
})
export class BarranotificacionComponent {

  constructor(private barraNotifica: MatSnackBar, public pedidoServicio: PedidoServicioService) { 
    this.getObservableBarraNotifica();
  }

  getObservableBarraNotifica() {
    this.pedidoServicio.obsBarraNotifica.subscribe( (value) =>
      {
        console.log(value);
        this.abrirBarraNotifica(value.mensaje, value.accion);
      });
  }

  abrirBarraNotifica(mensaje: string, accion: string) {
    this.barraNotifica.open(mensaje, accion, {
      duration: 3000
    });
    this.pedidoServicio.barraNotifica.mensaje = null;
  }

}

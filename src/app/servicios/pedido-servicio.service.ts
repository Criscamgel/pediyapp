import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoServicioService {

  /* Observables */
  obsBarraNotifica: any;
  barraNotifica = {
    mensaje: null,
    accion: null,
    visible: false
  };

  precioPlato: Number;
  obsPrecioPlato: any;

  pedido = {
    pedido: {
    consumidor: '',
    celular: null,
    direccionDomicilio: 'Carrera 35 bis # 1c - 55'
    },
    platos: [],
    porciones: [
      {
          nombreAdicion: '',
          cantidad: 3
      }
    ],
    totalPedido: 0,
    valorDomicilio: 0

  };

  constructor() {
    /* Observables */
    this.obsBarraNotifica = new BehaviorSubject<any>(this.barraNotifica);
   }

   setBarraNotifica(mensaje: string, accion: string) {
    this.barraNotifica.mensaje = mensaje;
    this.barraNotifica.accion = accion;
    this.obsBarraNotifica.next(this.barraNotifica);
   }

   setPrecioPlato(){

   }
}

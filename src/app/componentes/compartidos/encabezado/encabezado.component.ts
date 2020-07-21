import { Component, OnInit } from '@angular/core';
import { Constantes } from '../../../../constantes/constantes';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss']
})
export class EncabezadoComponent implements OnInit {

  constantes = Constantes;

  constructor() { }

  ngOnInit() {
  }

}

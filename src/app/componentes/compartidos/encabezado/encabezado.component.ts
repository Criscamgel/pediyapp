import { Component, OnInit, Input } from '@angular/core';
import { Constantes } from '../../../../constantes/constantes';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss']
})
export class EncabezadoComponent implements OnInit {

  constantes = Constantes;
  @Input() titulo;
  @Input() subtitulo;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Constantes } from '../../../../../constantes/constantes';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constantes = Constantes;

  constructor() { }

  ngOnInit() {
  }

}

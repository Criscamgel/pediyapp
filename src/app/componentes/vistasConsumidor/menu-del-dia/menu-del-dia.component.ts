import { Component, OnInit } from '@angular/core';
import { Constantes } from 'src/constantes/constantes';

@Component({
  selector: 'app-menu-del-dia',
  templateUrl: './menu-del-dia.component.html',
  styleUrls: ['./menu-del-dia.component.scss']
})
export class MenuDelDiaComponent implements OnInit {

  constantes = Constantes;

  constructor() { }

  ngOnInit() {
  }

}

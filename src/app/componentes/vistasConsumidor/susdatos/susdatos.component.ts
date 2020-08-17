import { Component, OnInit, Input } from '@angular/core';
import { Constantes } from 'src/constantes/constantes';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-susdatos',
  templateUrl: './susdatos.component.html',
  styleUrls: ['./susdatos.component.scss']
})
export class SusdatosComponent implements OnInit {

  susDatos: FormGroup;
  constantes = Constantes;

  constructor( public formBuilder: FormBuilder) {
    mapboxgl.accessToken = 'pk.eyJ1IjoiY3Jpc2NhbWdlbCIsImEiOiJja2R5dXRmdWYwbzFjMnpvZ3hreDJnaTI0In0.MLgEpBj00KSBOZMX7fZHhA';
    this.crearFormulario();
    this.crearMapa();

  }

  ngOnInit() {
  }

  crearFormulario() {
    this.susDatos = this.formBuilder.group({
      nombres: [null, Validators.required],
      celular: [null, Validators.required],
      direccion: [null, Validators.required]
    });

}

  crearMapa() {
    const map = new mapboxgl.Map({
    container: 'mapa',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
    });
  }

  iraSusDatos() {
    console.log("Ir a sus datos");
  }

}

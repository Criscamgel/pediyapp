import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuDelDiaComponent } from './componentes/vistasConsumidor/menu-del-dia/menu-del-dia.component';
import { MaterialModule } from './material-module';
import { EncabezadoComponent } from './componentes/compartidos/encabezado/encabezado.component';
import { PieComponent } from './componentes/compartidos/pie/pie.component';
import { MenuComponent } from './componentes/vistasConsumidor/menu-del-dia/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BarranotificacionComponent } from './componentes/compartidos/barranotificacion/barranotificacion.component';
import { CalculadoraPlatosComponent } from './componentes/compartidos/calculadora-platos/calculadora-platos.component';
import { IngresoComponent } from './componentes/ingreso/ingreso.component';
import { RecuperarComponent } from './componentes/ingreso/recuperar/recuperar.component';
import { SusdatosComponent } from './componentes/vistasConsumidor/susdatos/susdatos.component';
import { SoloNumerosDirective } from './directivas/solo-numeros.directive';

registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    MenuDelDiaComponent,
    EncabezadoComponent,
    PieComponent,
    MenuComponent,
    BarranotificacionComponent,
    CalculadoraPlatosComponent,
    IngresoComponent,
    RecuperarComponent,
    SusdatosComponent,
    SoloNumerosDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }

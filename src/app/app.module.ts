import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuDelDiaComponent } from './componentes/vistasConsumidor/menu-del-dia/menu-del-dia.component';
import { MaterialModule } from './material-module';
import { EncabezadoComponent } from './componentes/compartidos/encabezado/encabezado.component';
import { PieComponent } from './componentes/compartidos/pie/pie.component';
import { MenuComponent } from './componentes/vistasConsumidor/menu-del-dia/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuDelDiaComponent,
    EncabezadoComponent,
    PieComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

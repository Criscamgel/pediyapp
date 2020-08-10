import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuDelDiaComponent } from './componentes/vistasConsumidor/menu-del-dia/menu-del-dia.component';
import { IngresoComponent } from './componentes/ingreso/ingreso.component';
import { RecuperarComponent } from './componentes/ingreso/recuperar/recuperar.component';


const routes: Routes = [
  { path: 'menudeldia', component: MenuDelDiaComponent },
  { path: 'ingreso', component: IngresoComponent },
  { path: 'ingreso/recuperar', component: RecuperarComponent },
  { path: 'menudeldia/susdatos', component: MenuDelDiaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'menudeldia' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

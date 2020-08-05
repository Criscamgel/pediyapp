import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuDelDiaComponent } from './componentes/vistasConsumidor/menu-del-dia/menu-del-dia.component';
import { IngresoComponent } from './componentes/ingreso/ingreso.component';


const routes: Routes = [
  { path: 'menudeldia', component: MenuDelDiaComponent },
  { path: 'ingreso', component: IngresoComponent },
  { path: 'menudeldia/susdatos', component: MenuDelDiaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'menudeldia' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialConsultasPage } from './historial-consultas.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialConsultasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialConsultasPageRoutingModule {}

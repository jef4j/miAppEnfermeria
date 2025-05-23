import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevaConsultaPage } from './nueva-consulta.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaConsultaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevaConsultaPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarEstudiantePage } from './agregar-estudiante.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarEstudiantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarEstudiantePageRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarEstudiantePageRoutingModule } from './agregar-estudiante-routing.module';

import { AgregarEstudiantePage } from './agregar-estudiante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarEstudiantePageRoutingModule
  ],
  declarations: [AgregarEstudiantePage]
})
export class AgregarEstudiantePageModule {}

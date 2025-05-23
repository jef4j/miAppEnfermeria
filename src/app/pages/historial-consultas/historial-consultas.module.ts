import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialConsultasPageRoutingModule } from './historial-consultas-routing.module';

import { HistorialConsultasPage } from './historial-consultas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialConsultasPageRoutingModule
  ],
  declarations: [HistorialConsultasPage]
})
export class HistorialConsultasPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaConsultaPageRoutingModule } from './nueva-consulta-routing.module';

import { NuevaConsultaPage } from './nueva-consulta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaConsultaPageRoutingModule
  ],
  declarations: [NuevaConsultaPage]
})
export class NuevaConsultaPageModule {}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-historial-consultas',
  templateUrl: './historial-consultas.page.html',
  styleUrls: ['./historial-consultas.page.scss'],
  standalone: false,
})
export class HistorialConsultasPage {
  codigo = '';
  consultas: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private toastController: ToastController
  ) {
    this.loadConsultations();
  }

  loadConsultations() {
    this.codigo = this.route.snapshot.queryParamMap.get('codigo') || '';
    const storedData = localStorage.getItem(`consultas_${this.codigo}`);
    this.consultas = storedData ? JSON.parse(storedData) : [];
    
    // Ordenar por fecha (más reciente primero)
    this.consultas.sort((a, b) => 
      new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
    );
  }

  async refresh() {
    this.loadConsultations();
    const toast = await this.toastController.create({
      message: 'Historial actualizado',
      duration: 1500,
      position: 'top',
      color: 'success',
      icon: 'checkmark-outline'
    });
    await toast.present();
  }
}
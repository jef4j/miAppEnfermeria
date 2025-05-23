import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-nueva-consulta',
  templateUrl: './nueva-consulta.page.html',
  styleUrls: ['./nueva-consulta.page.scss'],
  standalone: false,
})
export class NuevaConsultaPage {
  codigo = '';
  caso = '';
  solucion = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toastController: ToastController
  ) {
    this.codigo = this.route.snapshot.queryParamMap.get('codigo') || '';
  }

  async guardarConsulta() {
    if (!this.caso || !this.solucion) return;

    const consultas = JSON.parse(localStorage.getItem(`consultas_${this.codigo}`) || '[]');
    const nuevaConsulta = {
      caso: this.caso,
      solucion: this.solucion,
      fecha: new Date().toISOString()
    };
    
    consultas.unshift(nuevaConsulta); // Agregar al inicio del array
    localStorage.setItem(`consultas_${this.codigo}`, JSON.stringify(consultas));

    // Mostrar feedback
    const toast = await this.toastController.create({
      message: 'Consulta registrada correctamente',
      duration: 2000,
      color: 'success',
      position: 'top',
      icon: 'checkmark-circle-outline'
    });
    await toast.present();

    // Redirigir después del feedback
    setTimeout(() => {
      this.router.navigate(['/historial-consultas'], { 
        queryParams: { codigo: this.codigo } 
      });
    }, 500);
  }
}
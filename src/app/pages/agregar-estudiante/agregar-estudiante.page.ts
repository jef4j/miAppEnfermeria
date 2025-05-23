import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-agregar-estudiante',
  templateUrl: './agregar-estudiante.page.html',
  styleUrls: ['./agregar-estudiante.page.scss'],
  standalone: false,
})
export class AgregarEstudiantePage {
  nombre = '';
  apellido = '';
  codigo = '';
  caso = '';
  solucion = '';

  constructor(
    private router: Router,
    private toastController: ToastController
  ) {}

  async guardarEstudiante() {
    const estudiante = { 
      nombre: this.nombre, 
      apellido: this.apellido, 
      codigo: this.codigo, 
      caso: this.caso, 
      solucion: this.solucion,
      fechaRegistro: new Date().toISOString()
    };
    
    localStorage.setItem(`estudiante_${this.codigo}`, JSON.stringify(estudiante));
    
    // Mostrar feedback visual
    const toast = await this.toastController.create({
      message: 'Estudiante registrado correctamente',
      duration: 2000,
      color: 'success',
      position: 'top',
      icon: 'checkmark-circle-outline',
      cssClass: 'custom-toast'
    });
    await toast.present();
    
    // Redirigir después del feedback
    setTimeout(() => {
      this.router.navigateByUrl('/estudiantes');
    }, 500);
  }
}
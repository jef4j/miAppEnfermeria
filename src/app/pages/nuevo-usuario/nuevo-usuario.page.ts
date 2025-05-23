import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.page.html',
  styleUrls: ['./nuevo-usuario.page.scss'],
  standalone: false,
})
export class NuevoUsuarioPage {
  // Campos del formulario
  nombre = '';
  apellido = '';
  email = '';
  password = '';
  confirmar = '';
  
  // Manejo de errores
  error = '';
  isLoading = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastController: ToastController
  ) {}

  /**
   * Método para registrar un nuevo usuario
   */
  async registrar() {
    // Validaciones básicas
    if (!this.camposValidos()) return;
    
    this.isLoading = true;
    this.error = '';

    try {
      await this.ejecutarRegistro();
      await this.mostrarMensajeExito();
      this.redirigirALogin();
    } catch (error) {
      this.manejarError(error);
    } finally {
      this.isLoading = false;
    }
  }

  /**
   * Valida los campos del formulario
   */
  private camposValidos(): boolean {
    if (!this.nombre || !this.apellido || !this.email || !this.password || !this.confirmar) {
      this.error = 'Todos los campos son obligatorios.';
      return false;
    }

    if (this.password !== this.confirmar) {
      this.error = 'Las contraseñas no coinciden.';
      return false;
    }

    return true;
  }

  /**
   * Ejecuta el registro del usuario
   */
  private async ejecutarRegistro() {
    await this.authService.registrar(
      this.nombre,
      this.apellido,
      this.email,
      this.password
    );
  }

  /**
   * Muestra mensaje de éxito
   */
  private async mostrarMensajeExito() {
    const toast = await this.toastController.create({
      message: 'Usuario registrado correctamente.',
      duration: 2000,
      color: 'success',
      position: 'bottom',
    });
    await toast.present();
  }

  /**
   * Redirige a la página de login
   */
  private redirigirALogin() {
    this.router.navigateByUrl('/login');
  }

  /**
   * Maneja errores durante el registro
   */
  private manejarError(error: any) {
    console.error('Error en registro:', error);
    this.error = error.message || 'Error al registrar usuario. Intente nuevamente.';
  }
}
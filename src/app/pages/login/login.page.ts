import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';  // Ajusta ruta si es necesario

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage {
  email = '';
  password = '';
  error = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.error = '';

    if (!this.email || !this.password) {
      this.error = 'Todos los campos son obligatorios.';
      return;
    }

    this.authService.login(this.email.trim(), this.password)
      .then(() => {
        this.router.navigateByUrl('/home');
      })
      .catch((err: any) => {
        if (err.code === 'auth/invalid-email') {
          this.error = 'Correo electrónico no válido.';
        } else if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
          this.error = 'Correo o contraseña incorrectos.';
        } else {
          this.error = 'Error al iniciar sesión.';
        }
        console.error(err);
      });
  }
}

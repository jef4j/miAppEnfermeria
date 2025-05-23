import { Component } from '@angular/core';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.page.html',
  styleUrls: ['./estudiantes.page.scss'],
  standalone: false,
})
export class EstudiantesPage {
  codigoBuscar = '';
  estudiante: any = null;
  mostrandoTodos = false;
  todosEstudiantes: any[] = [];

  buscarEstudiante() {
    if (!this.codigoBuscar.trim()) {
      this.estudiante = null;
      return;
    }

    const data = localStorage.getItem(`estudiante_${this.codigoBuscar}`);
    this.estudiante = data ? JSON.parse(data) : null;
    this.mostrandoTodos = false;
  }

  mostrarTodos() {
    this.mostrandoTodos = true;
    this.estudiante = null;
    this.codigoBuscar = '';
    
    // Obtener todos los estudiantes del localStorage
    this.todosEstudiantes = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith('estudiante_')) {
        const estudiante = JSON.parse(localStorage.getItem(key) || '{}');
        this.todosEstudiantes.push(estudiante);
      }
    }
  }

  seleccionarEstudiante(codigo: string) {
    this.codigoBuscar = codigo;
    this.buscarEstudiante();
    this.mostrandoTodos = false;
  }
}
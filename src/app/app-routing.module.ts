import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { firebaseConfig } from '../environments/firebase.config';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  
   {
    path: 'nuevo-usuario',
    loadChildren: () =>
      import('./pages/nuevo-usuario/nuevo-usuario.module').then(
        (m) => m.NuevoUsuarioPageModule
      ),
  },
  {
    path: 'estudiantes',
    loadChildren: () =>
      import('./pages/estudiantes/estudiantes.module').then(
        (m) => m.EstudiantesPageModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'agregar-estudiante',
    loadChildren: () =>
      import('./pages/agregar-estudiante/agregar-estudiante.module').then(
        (m) => m.AgregarEstudiantePageModule
      ),
  },
  {
    path: 'estudiantes',
    loadChildren: () =>
      import('./pages/estudiantes/estudiantes.module').then(
        (m) => m.EstudiantesPageModule
      ),
  },
  {
    path: 'nueva-consulta',
    loadChildren: () =>
      import('./pages/nueva-consulta/nueva-consulta.module').then(
        (m) => m.NuevaConsultaPageModule
      ),
  },
  {
    path: 'historial-consultas',
    loadChildren: () =>
      import('./pages/historial-consultas/historial-consultas.module').then(
        (m) => m.HistorialConsultasPageModule
      ),
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}



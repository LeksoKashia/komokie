import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then(
        (m) => m.HomeComponent
      ),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./core/components/register/register.component').then(
        (m) => m.RegisterComponent
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./core/components/login/login.component').then(
        (m) => m.LoginComponent
      ),
  },

  {
    path: `movie/:id`,
    loadComponent: () =>
      import('./pages/movie-details/movie-details.component').then(
        (m) => m.MovieDetailsComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

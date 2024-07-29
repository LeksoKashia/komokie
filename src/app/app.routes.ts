import { Routes } from '@angular/router';
import { RegisterComponent } from './core/components/register/register.component';
import { LoginComponent } from './core/components/login/login.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
      path: 'register',
      component: RegisterComponent,
    },
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: '',
      component: HomeComponent,
    },
    {
      path: '**',
      redirectTo: 'login', // Redirect to home if no other route matches
    }
  ];
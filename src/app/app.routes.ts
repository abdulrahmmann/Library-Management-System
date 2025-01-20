import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'signin',
    loadComponent: () =>
      import('../app/auth/signin/signin.component').then((mod) => mod.SigninComponent)
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('../app/auth/signup/signup.component').then((mod) => mod.SignupComponent)
  },
];

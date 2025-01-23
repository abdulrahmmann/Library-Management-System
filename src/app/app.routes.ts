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
  {
    path: '',
    loadComponent: () =>
      import('../app/home/home.component').then((mod) => mod.HomeComponent)
  },
  {
    path: 'search',
    loadComponent: () =>
      import('../app/search-page/search-page.component').then((mod) => mod.SearchPageComponent)
  },
  {
    path: 'about',
    loadComponent: () =>
      import('../app/home/home.component').then((mod) => mod.HomeComponent)
  },
  {
    path: 'categories',
    loadComponent: () =>
      import('../app/home/home.component').then((mod) => mod.HomeComponent)
  },
  {
    path: 'best-sellers',
    loadComponent: () =>
      import('../app/home/home.component').then((mod) => mod.HomeComponent)
  },
];

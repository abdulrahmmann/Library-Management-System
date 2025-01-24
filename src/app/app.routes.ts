import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'signin',
    loadComponent: () =>
      import('./pages/signin/signin.component').then((mod) => mod.SigninComponent)
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./pages/signup/signup.component').then((mod) => mod.SignupComponent)
  },
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((mod) => mod.HomeComponent)
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((mod) => mod.HomeComponent)
  },
  {
    path: 'search',
    loadComponent: () =>
      import('./pages/search-page/search-page.component').then((mod) => mod.SearchPageComponent)
  },
  // {
  //   path: 'about',
  //   loadComponent: () =>
  //     import('../app/home/home.component').then((mod) => mod.HomeComponent)
  // },
  // {
  //   path: 'categories',
  //   loadComponent: () =>
  //     import('../app/home/home.component').then((mod) => mod.HomeComponent)
  // },
  // {
  //   path: 'best-sellers',
  //   loadComponent: () =>
  //     import('../app/home/home.component').then((mod) => mod.HomeComponent)
  // },
];

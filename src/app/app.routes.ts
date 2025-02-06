import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/signin/signin.component').then((mod) => mod.SigninComponent)
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./pages/signup/signup.component').then((mod) => mod.SignupComponent)
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
  {
    path: 'book-details',
    loadComponent: () =>
      import('./pages/book-details/book-details.component').then((mod) => mod.BookDetailsComponent)
  },
  // Admin Dashboards
  {
    path: 'admin/home',
    loadComponent: () =>
      import('./admin/pages/home-dashboard/home-dashboard.component').then((mod) => mod.HomeDashboardComponent)
  },
  {
    path: 'admin/all-users',
    loadComponent: () =>
      import('./admin/pages/all-users/all-users.component').then((mod) => mod.AllUsersComponent)
  },
  {
    path: 'admin/all-books',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./admin/pages/all-books/all-books.component').then((mod) => mod.AllBooksComponent)
      },
      {
        path: 'create-new-book',
        loadComponent: () =>
          import('./admin/pages/create-new-book/create-new-book.component').then((mod) => mod.CreateNewBookComponent)
      },
      {
        path: 'edit-book/:id',
        loadComponent: () =>
          import('./admin/pages/edit-book/edit-book.component').then((mod) => mod.EditBookComponent)
      },
      {
        path: 'edit-book/:id/edit-book-details',
        loadComponent: () =>
          import('./admin/pages/edit-book-details/edit-book-details.component').then((mod) => mod.EditBookDetailsComponent)
      },
    ]
  },
  {
    path: 'admin/borrow-requests',
    loadComponent: () =>
      import('./admin/pages/borrow-requests/borrow-requests.component').then((mod) => mod.BorrowRequestsComponent)
  },
  {
    path: 'admin/account-requests',
    loadComponent: () =>
      import('./admin/pages/account-requests/account-requests.component').then((mod) => mod.AccountRequestsComponent)
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then((mod) => mod.NotFoundComponent)
  },
];

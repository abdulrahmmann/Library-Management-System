import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  sidebarItems = [
    {
      id: 1,
      name: 'Home',
      icon: '/admin/home-icon.svg',
      route: '/admin/home',
    },
    {
      id: 2,
      name: 'All Users',
      icon: '/admin/all-users-icon.svg',
      route: '/admin/all-users',
    },
    {
      id: 3,
      name: 'All Books',
      icon: '/admin/all-books-icon.svg',
      route: '/admin/all-books',
    },
    {
      id: 4,
      name: 'Borrow Requests',
      icon: '/admin/borrow-req-icon.svg',
      route: '/admin/borrow-requests',
    },
    {
      id: 5,
      name: 'Account Requests',
      icon: '/admin/acc-req-icon.svg',
      route: '/admin/account-requests',
    },
  ];
}

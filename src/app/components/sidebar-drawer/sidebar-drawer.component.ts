import {Component, inject} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import {NgClass} from '@angular/common';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-sidebar-drawer',
  imports: [
    RouterLink,
    RouterLinkActive,
    NgClass,
    DrawerModule, ButtonModule
  ],
  templateUrl: './sidebar-drawer.component.html',
  styles: ``
})
export class SidebarDrawerComponent {
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

  private router = inject(Router);

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  visible: boolean = false;
}

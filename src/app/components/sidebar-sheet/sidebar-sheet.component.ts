import {Component, inject} from '@angular/core';
import { BrnSheetContentDirective, BrnSheetTriggerDirective } from '@spartan-ng/brain/sheet';
import {
  HlmSheetComponent,
  HlmSheetContentComponent,
  HlmSheetFooterComponent,
  HlmSheetHeaderComponent, HlmSheetImports,
} from '@spartan-ng/ui-sheet-helm';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-sidebar-sheet',
  templateUrl: './sidebar-sheet.component.html',
  imports: [
    BrnSheetTriggerDirective,
    BrnSheetContentDirective,
    HlmSheetComponent,
    HlmSheetContentComponent,
    HlmSheetHeaderComponent,
    HlmSheetFooterComponent,
    HlmSheetImports,
    HlmSheetImports,
    HlmSheetComponent,
    HlmSheetImports,
    RouterLinkActive,
    RouterLink,
    NgClass,
  ],
})
export class SidebarSheetComponent {
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
}

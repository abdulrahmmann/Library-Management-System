import {Component, inject} from '@angular/core';
import {AdminLayoutComponent} from '../../components/admin-layout/admin-layout.component';
import {AllUsersService} from '../../services/all-users.service';
import {DatePipe, NgOptimizedImage} from '@angular/common';
import {ProfilePicService} from '../../services/profile-pic.service';

import { BrnDialogContentDirective, BrnDialogTriggerDirective } from '@spartan-ng/brain/dialog';
import {
  HlmDialogComponent,
  HlmDialogContentComponent,
  HlmDialogFooterComponent,
  HlmDialogHeaderComponent,
} from '@spartan-ng/ui-dialog-helm';

@Component({
  selector: 'app-all-users',
  imports: [
    AdminLayoutComponent,
    DatePipe,
    BrnDialogTriggerDirective,
    BrnDialogContentDirective,
    HlmDialogComponent,
    HlmDialogContentComponent,
    HlmDialogHeaderComponent,
    HlmDialogFooterComponent,
    HlmDialogContentComponent,
    NgOptimizedImage,
  ],
  templateUrl: './all-users.component.html',
})
export class AllUsersComponent {
  private _allUsersService = inject(AllUsersService);

  protected allUsers = this._allUsersService.getAllUsers;

  protected profilePicService = inject(ProfilePicService);

  isAscending: boolean = true;

  toggleSort() {
    this.isAscending = !this.isAscending;
    this.allUsers.sort((a, b) =>
      this.isAscending
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );
  }

  protected usersPerPage = 6;
  protected currentPage = 1;

  get totalPages(): number {
    return Math.ceil(this.allUsers.length / this.usersPerPage);
  }

  get paginatedUsers() {
    const start = (this.currentPage - 1) * this.usersPerPage;
    const end = start + this.usersPerPage;
    return this.allUsers.slice(start, end);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

}

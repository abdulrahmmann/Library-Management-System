import {Component, inject} from '@angular/core';
import {AdminLayoutComponent} from '../../components/admin-layout/admin-layout.component';
import {AccountRequestsService} from '../../services/account-requests.service';
import {ProfilePicService} from '../../services/profile-pic.service';
import {DatePipe} from '@angular/common';

import { BrnDialogContentDirective, BrnDialogTriggerDirective } from '@spartan-ng/brain/dialog';
import {
  HlmDialogComponent,
  HlmDialogContentComponent,
  HlmDialogFooterComponent,
  HlmDialogHeaderComponent,
} from '@spartan-ng/ui-dialog-helm';


@Component({
  selector: 'app-account-requests',
  imports: [
    AdminLayoutComponent,
    DatePipe,
    BrnDialogTriggerDirective,
    BrnDialogContentDirective,
    HlmDialogComponent,
    HlmDialogContentComponent,
    HlmDialogHeaderComponent,
    HlmDialogFooterComponent,
  ],
  templateUrl: './account-requests.component.html',
})
export class AccountRequestsComponent {
  private _allAccountsRequestsService = inject(AccountRequestsService);

  protected allAccounts = this._allAccountsRequestsService.getAllAccountsRequests;

  protected profilePicService = inject(ProfilePicService);

  isAscending: boolean = true;

  toggleSort() {
    this.isAscending = !this.isAscending;
    this.allAccounts.sort((a, b) =>
      this.isAscending
        ? a.dateJoined.localeCompare(b.dateJoined)
        : b.dateJoined.localeCompare(a.dateJoined)
    );
  }
}

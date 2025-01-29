import {Component, inject} from '@angular/core';
import {AdminLayoutComponent} from '../../components/admin-layout/admin-layout.component';
import {AccountRequestsService} from './account-requests.service';
import {ProfilePicService} from '../../services/profile-pic.service';
import {DatePipe} from '@angular/common';

import { BrnDialogContentDirective, BrnDialogTriggerDirective } from '@spartan-ng/brain/dialog';
import {
  HlmDialogComponent,
  HlmDialogContentComponent,
  HlmDialogDescriptionDirective,
  HlmDialogFooterComponent,
  HlmDialogHeaderComponent, HlmDialogImports,
  HlmDialogTitleDirective,
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
    HlmDialogTitleDirective,
    HlmDialogDescriptionDirective,
    HlmDialogContentComponent,
    HlmDialogContentComponent,
    HlmDialogImports,
  ],
  templateUrl: './account-requests.component.html',
})
export class AccountRequestsComponent {
  private _allAccountsRequestsService = inject(AccountRequestsService);

  protected allAccounts = this._allAccountsRequestsService.getAllAccountsRequests;

  protected profilePicService = inject(ProfilePicService);
}

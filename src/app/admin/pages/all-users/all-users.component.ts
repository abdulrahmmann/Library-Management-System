import {Component, inject} from '@angular/core';
import {AdminLayoutComponent} from '../../components/admin-layout/admin-layout.component';
import {AllUsersService} from '../../services/all-users.service';
import {DatePipe, NgOptimizedImage} from '@angular/common';
import {ProfilePicService} from '../../services/profile-pic.service';

import { BrnDialogContentDirective, BrnDialogTriggerDirective } from '@spartan-ng/brain/dialog';
import {
  HlmDialogCloseDirective,
  HlmDialogComponent,
  HlmDialogContentComponent,
  HlmDialogDescriptionDirective,
  HlmDialogFooterComponent,
  HlmDialogHeaderComponent,
  HlmDialogTitleDirective,
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
    HlmDialogTitleDirective,
    HlmDialogDescriptionDirective,
    HlmDialogContentComponent,
    HlmDialogCloseDirective,
    NgOptimizedImage,
  ],
  templateUrl: './all-users.component.html',
})
export class AllUsersComponent {
  private _allUsersService = inject(AllUsersService);

  protected allUsers = this._allUsersService.getAllUsers;

  protected profilePicService = inject(ProfilePicService);

}

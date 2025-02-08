import {Component, inject} from '@angular/core';
import {AdminLayoutComponent} from '../../components/admin-layout/admin-layout.component';
import {AccountRequestsService} from '../../services/account-requests.service';
import {ProfilePicService} from '../../services/profile-pic.service';
import {DatePipe} from '@angular/common';
import {TableModule} from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { Dialog } from 'primeng/dialog'

@Component({
  selector: 'app-account-requests',
  imports: [
    AdminLayoutComponent,
    TableModule,
    DatePipe,
    Dialog,
    ButtonModule
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

  visibleApprove: boolean = false;
  showApproveDialog() {
    this.visibleApprove = true;
  }

  visibleDeny: boolean = false;
  showDenyDialog() {
    this.visibleDeny = true;
  }

}

import {Component, inject} from '@angular/core';
import {RouterLink} from "@angular/router";
import {AccountRequestsService} from './account-requests.service';
import {NgClass} from '@angular/common';
import {ProfilePicService} from '../../services/profile-pic.service';

@Component({
  selector: 'app-account-requests',
  imports: [
    RouterLink,
    NgClass
  ],
  templateUrl: './account-requests.component.html',
})
export class AccountRequestsComponent {
  private _accountRequest = inject(AccountRequestsService);

  getAccountRequest = this._accountRequest.getAccountRequests;

  protected profilePicService = inject(ProfilePicService);

}

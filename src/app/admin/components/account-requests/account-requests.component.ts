import {Component, inject} from '@angular/core';
import {RouterLink} from "@angular/router";
import {AccountRequestsService} from './account-requests.service';
import {NgClass} from '@angular/common';

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

  getStyles(accountName: string): string {
    const firstLetter: string = accountName.charAt(0).toLowerCase();
    if ('a' <= firstLetter && firstLetter <= 'f') {
      return 'bg-green-400 border-green-700 text-green-900';
    } else if ('g' <= firstLetter && firstLetter <= 'k') {
      return 'bg-teal-400 border-teal-700 text-teal-900';
    } else if ('l' <= firstLetter && firstLetter <= 'p') {
      return 'bg-sky-400 border-sky-700 text-sky-900';
    } else if ('q' <= firstLetter && firstLetter <= 'u') {
      return 'bg-violet-400 border-violet-700 text-violet-900';
    } else if ('v' <= firstLetter && firstLetter <= 'z') {
      return 'bg-fuchsia-400 border-fuchsia-700 text-fuchsia-900';
    } else {
      return 'bg-grey-400 border-grey-700 text-grey-900';
    }
  }



}

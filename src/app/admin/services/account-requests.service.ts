import {Injectable} from '@angular/core';
import {AccountRequestsModel} from '../models/account-requests.model';

@Injectable({
  providedIn: 'root'
})
export class AccountRequestsService {
  private accountRequests: AccountRequestsModel[] = [
    {
      id: 1,
      accountName: 'Marc Atenson',
      accountEmail: 'marcnine@gmai.com',
      accountType: 'admin',
      accountImage: '/user2.png'
    },
    {
      id: 2,
      accountName: 'Susan Drake',
      accountEmail: 'contact@susandrake.io',
      accountType: 'user',
    },
    {
      id: 3,
      accountName: 'leo Richards',
      accountEmail: 'ronaldrichards@gmai.com',
      accountType: 'user',
    },
    {
      id: 4,
      accountName: 'Jane Cooper',
      accountEmail: 'janecooper@protonmai.com',
      accountType: 'admin',
      accountImage: '/user3.png'
    },
    {
      id: 5,
      accountName: 'Ian Warren',
      accountEmail: 'ianwarren@gmai.com',
      accountType: 'user',
    },
    {
      id: 6,
      accountName: 'Darrell Steward',
      accountEmail: 'darrellsteward@gmai.com',
      accountType: 'user',
      accountImage: '/user4.png'
    },
  ];

  get getAccountRequests(): AccountRequestsModel[] {
    return this.accountRequests;
  }

}

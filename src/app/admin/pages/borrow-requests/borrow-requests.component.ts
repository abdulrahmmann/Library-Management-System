import {Component, inject} from '@angular/core';
import {AdminLayoutComponent} from '../../components/admin-layout/admin-layout.component';
import {BorrowRequestsService} from '../../services/borrow-requests.service';
import {ProfilePicService} from '../../services/profile-pic.service';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-borrow-requests',
  imports: [
    AdminLayoutComponent,
    DatePipe
  ],
  templateUrl: './borrow-requests.component.html',
  styles: ``
})
export class BorrowRequestsComponent {
  private _borrowRequestsService = inject(BorrowRequestsService);

  protected borrowedRequestsBooks = this._borrowRequestsService.getAllBorrowedRequests;

  protected profilePicService = inject(ProfilePicService);

  isAscending: boolean = true;

  toggleSort() {
    this.isAscending = !this.isAscending;
    this.borrowedRequestsBooks.sort((a, b) =>
      this.isAscending
        ? a.borrowedDate.localeCompare(b.borrowedDate)
        : b.borrowedDate.localeCompare(a.borrowedDate)
    );
  }

}

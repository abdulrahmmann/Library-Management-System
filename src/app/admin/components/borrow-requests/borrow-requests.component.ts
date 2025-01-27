import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {BorrowRequestItemComponent} from '../borrow-request-item/borrow-request-item.component';
import {BorrowRequestsService} from './borrow-requests.service';

@Component({
  selector: 'app-borrow-requests',
  imports: [
    RouterLink,
    BorrowRequestItemComponent
  ],
  templateUrl: './borrow-requests.component.html',
  styles: ``
})
export class BorrowRequestsComponent {
  protected borrowRequestItems = inject(BorrowRequestsService).borrowedRequestsBooks;
}

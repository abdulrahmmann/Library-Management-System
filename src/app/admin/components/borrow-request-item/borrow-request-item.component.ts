import {Component, input} from '@angular/core';
import {DatePipe, NgForOf} from '@angular/common';

@Component({
  selector: 'app-borrow-request-item',
  imports: [
    DatePipe,
    NgForOf
  ],
  templateUrl: './borrow-request-item.component.html',
})
export class BorrowRequestItemComponent {
  bookName = input.required<string>();
  bookPoster = input.required<string>();
  author = input.required<string>();
  genre = input.required<string[]>();
  borrowedDate = input.required<string>();
  borrowedUserName = input.required<string>();
  borrowedUserImg = input.required<string>();
}

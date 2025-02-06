import {Component, input} from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-borrow-request-item',
  imports: [
    DatePipe,
  ],
  templateUrl: './borrow-request-item.component.html',
})
export class BorrowRequestItemComponent {
  bookName = input.required<string>();
  bookPoster = input.required<string>();
  author = input.required<string>();
  genre = input.required<string>();
  borrowedDate = input.required<string>();
  borrowedUserName = input.required<string>();
  // borrowedUserImg? = input<string>();

  // protected profilePicService = inject(ProfilePicService);
  //
  // userImage = this.profilePicService.getStyles(this.borrowedUserName.toString());
}

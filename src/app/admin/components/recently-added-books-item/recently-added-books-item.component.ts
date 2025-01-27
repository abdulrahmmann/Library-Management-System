import {Component, input} from '@angular/core';
import {DatePipe, NgForOf} from '@angular/common';

@Component({
  selector: 'app-recently-added-books-item',
  imports: [
    DatePipe,
    NgForOf,
  ],
  templateUrl: './recently-added-books-item.component.html',
})
export class RecentlyAddedBooksItemComponent {
  bookName = input.required<string>();
  bookPoster = input.required<string>();
  author = input.required<string>();
  genre = input.required<string[]>();
  date = input.required<string>();
}

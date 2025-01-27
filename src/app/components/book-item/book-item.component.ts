import {Component, input} from '@angular/core';
import {BookCoverComponent} from '../book-cover/book-cover.component';

@Component({
  selector: 'app-book-item',
  imports: [
    BookCoverComponent
  ],
  templateUrl: './book-item.component.html',
})

export class BookItemComponent {
  bookName = input.required<string>();
  bookGenre = input.required<string>();
  bookPosterImage = input.required<string>();
  bookPosterContainer = input.required<string>();
}

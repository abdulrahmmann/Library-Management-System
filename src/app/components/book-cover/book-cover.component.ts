import {Component, input} from '@angular/core';

@Component({
  selector: 'app-book-cover',
  imports: [],
  templateUrl: './book-cover.component.html',
})
export class BookCoverComponent {
  bookCoverColor = input.required<string>();
}

import {Component, input} from '@angular/core';

@Component({
  selector: 'app-book-item',
  imports: [],
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.css'
})

export class BookItemComponent {
  bookName = input.required<string>();
  bookGenre = input.required<string>();
  bookPosterImage = input.required<string>();
  bookPosterContainer = input.required<string>();

}

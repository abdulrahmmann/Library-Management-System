import {Component} from '@angular/core';
import {BookItemComponent} from '../book-item/book-item.component';

@Component({
  selector: 'app-popular-books',
  imports: [
    BookItemComponent,
  ],
  templateUrl: './popular-books.component.html',
  styleUrl: './popular-books.component.css'
})
export class PopularBooksComponent {

}

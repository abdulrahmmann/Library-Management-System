import { Component } from '@angular/core';
import {BookItemComponent} from "../book-item/book-item.component";
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-new-released-books',
  imports: [
    BookItemComponent,
    RouterLink
  ],
  templateUrl: './new-released-books.component.html',
  styleUrl: './new-released-books.component.css'
})
export class NewReleasedBooksComponent {

}

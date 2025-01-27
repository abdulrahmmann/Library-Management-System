import { Component } from '@angular/core';
import {BookItemComponent} from "../book-item/book-item.component";

@Component({
  selector: 'app-new-released-books',
  imports: [
    BookItemComponent,
  ],
  templateUrl: './new-released-books.component.html',
})
export class NewReleasedBooksComponent {

}

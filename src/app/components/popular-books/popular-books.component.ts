import { Component } from '@angular/core';
import {BookItemComponent} from '../book-item/book-item.component';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-popular-books',
    imports: [
        BookItemComponent,
        RouterLink
    ],
  templateUrl: './popular-books.component.html',
  styleUrl: './popular-books.component.css'
})
export class PopularBooksComponent {

}

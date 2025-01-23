import { Component } from '@angular/core';
import {BookItemComponent} from "../book-item/book-item.component";

@Component({
  selector: 'app-search-results',
    imports: [
        BookItemComponent
    ],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent {

}

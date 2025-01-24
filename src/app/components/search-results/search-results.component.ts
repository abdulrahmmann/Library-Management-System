import { Component } from '@angular/core';
import {BookItemComponent} from "../book-item/book-item.component";

// import { BrnSelectImports } from '@spartan-ng/brain/select';
// import { HlmSelectImports } from '@spartan-ng/ui-select-helm';


@Component({
  selector: 'app-search-results',
  imports: [
    BookItemComponent,
    // BrnSelectImports,
    // HlmSelectImports
  ],
  templateUrl: './search-results.component.html',
})
export class SearchResultsComponent {

}

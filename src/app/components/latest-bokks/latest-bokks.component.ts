import { Component } from '@angular/core';
import {BookItemComponent} from "../book-item/book-item.component";

@Component({
  selector: 'app-latest-bokks',
    imports: [
        BookItemComponent
    ],
  templateUrl: './latest-bokks.component.html',
})
export class LatestBokksComponent {

}

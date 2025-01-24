import { Component } from '@angular/core';
import {BookItemComponent} from "../book-item/book-item.component";

@Component({
  selector: 'app-latest-bokks',
    imports: [
        BookItemComponent
    ],
  templateUrl: './latest-bokks.component.html',
  styleUrl: './latest-bokks.component.css'
})
export class LatestBokksComponent {

}

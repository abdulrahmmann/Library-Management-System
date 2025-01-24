import { Component } from '@angular/core';
import {MainLayoutComponent} from '../../components/main-layout/main-layout.component';
import {HomeBannerComponent} from '../../components/home-banner/home-banner.component';
import {BookItemComponent} from '../../components/book-item/book-item.component';

@Component({
  selector: 'app-book-details',
  imports: [
    MainLayoutComponent,
    HomeBannerComponent,
    BookItemComponent
  ],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {

}

import { Component } from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {HomeBannerComponent} from '../home-banner/home-banner.component';
import {NewReleasedBooksComponent} from '../new-released-books/new-released-books.component';
import {PopularBooksComponent} from '../popular-books/popular-books.component';

@Component({
  selector: 'app-main-layout',
  imports: [
    HeaderComponent,
    HomeBannerComponent,
    NewReleasedBooksComponent,
    PopularBooksComponent
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}

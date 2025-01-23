import { Component } from '@angular/core';
import {HeaderComponent} from '../components/header/header.component';
import {HomeBannerComponent} from '../components/home-banner/home-banner.component';
import {PopularBooksComponent} from '../components/popular-books/popular-books.component';
import {NewReleasedBooksComponent} from '../components/new-released-books/new-released-books.component';
import {MainLayoutComponent} from '../components/main-layout/main-layout.component';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    HomeBannerComponent,
    PopularBooksComponent,
    NewReleasedBooksComponent,
    MainLayoutComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

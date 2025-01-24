import { Component } from '@angular/core';
import {HomeBannerComponent} from '../../components/home-banner/home-banner.component';
import {PopularBooksComponent} from '../../components/popular-books/popular-books.component';
import {NewReleasedBooksComponent} from '../../components/new-released-books/new-released-books.component';
import {MainLayoutComponent} from '../../components/main-layout/main-layout.component';
import {LatestBokksComponent} from '../../components/latest-bokks/latest-bokks.component';


@Component({
  selector: 'app-home',
  imports: [
    HomeBannerComponent,
    PopularBooksComponent,
    NewReleasedBooksComponent,
    MainLayoutComponent,
    LatestBokksComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

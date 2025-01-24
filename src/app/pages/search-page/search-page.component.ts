import {Component, signal} from '@angular/core';
import {MainLayoutComponent} from '../../components/main-layout/main-layout.component';
import {SearchEmptyComponent} from '../../components/search-empty/search-empty.component';
import {FormsModule} from '@angular/forms';
import {SearchResultsComponent} from '../../components/search-results/search-results.component';

@Component({
  selector: 'app-search-page',
  imports: [
    MainLayoutComponent,
    SearchEmptyComponent,
    FormsModule,
    SearchResultsComponent
  ],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent {
  bookSearched = signal<string>('');

  onSearchedBook(value: string): void {
    this.bookSearched.set(value.trim());
  }

}

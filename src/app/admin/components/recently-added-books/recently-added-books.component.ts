import {Component, inject, signal} from '@angular/core';
import {RouterLink} from "@angular/router";
import {RecentlyAddedBooksService} from '../../services/recently-added-books.service';
import {RecentlyAddedBooksModel} from '../../models/recently-added-books.model';
import {RecentlyAddedBooksItemComponent} from '../recently-added-books-item/recently-added-books-item.component';

@Component({
  selector: 'app-recently-added-books',
  imports: [
    RouterLink,
    RecentlyAddedBooksItemComponent
  ],
  templateUrl: './recently-added-books.component.html',
  styles: ``
})
export class RecentlyAddedBooksComponent {
  private _recentlyAddedBooks = inject(RecentlyAddedBooksService);

  protected recentlyBooks =
    signal<RecentlyAddedBooksModel[]>(this._recentlyAddedBooks.getRecentlyAddedBooks);


}

import {Component, inject} from '@angular/core';
import {AdminLayoutComponent} from '../../components/admin-layout/admin-layout.component';
import {AllBooksService} from './all-books.service';
import {DatePipe} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-all-books',
  imports: [
    AdminLayoutComponent,
    DatePipe,
    RouterLink,
  ],
  templateUrl: './all-books.component.html',
})
export class AllBooksComponent {
  private _allBooksService = inject(AllBooksService);

  protected allBooks = this._allBooksService.getAllBooks;

}

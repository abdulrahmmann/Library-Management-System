import {Component, inject} from '@angular/core';
import {AdminLayoutComponent} from '../../components/admin-layout/admin-layout.component';
import {AllBooksService} from './all-books.service';

@Component({
  selector: 'app-all-books',
  imports: [
    AdminLayoutComponent,
  ],
  templateUrl: './all-books.component.html',
})
export class AllBooksComponent {
  private _allBooksService = inject(AllBooksService);

  protected allBooks = this._allBooksService.getAllBooks;

}

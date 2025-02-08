import {Component, inject} from '@angular/core';
import {AdminLayoutComponent} from '../../components/admin-layout/admin-layout.component';
import {AllBooksService} from '../../services/all-books.service';
import {NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';
import {TableModule} from 'primeng/table';
import {Dialog} from 'primeng/dialog';



@Component({
  selector: 'app-all-books',
  imports: [
    AdminLayoutComponent,
    RouterLink,
    NgOptimizedImage,
    TableModule,
    Dialog,
  ],
  templateUrl: './all-books.component.html',
})
export class AllBooksComponent {
  private _allBooksService = inject(AllBooksService);

  protected allBooks = this._allBooksService.getAllBooks;

  isAscending: boolean = true;

  toggleSort() {
    this.isAscending = !this.isAscending;
    this.allBooks.sort((a, b) =>
      this.isAscending
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title)
    );
  }

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

  closeDialog() {
    this.visible = false;
  }

}

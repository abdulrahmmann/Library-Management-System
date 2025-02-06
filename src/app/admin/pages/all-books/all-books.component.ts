import {Component, inject} from '@angular/core';
import {AdminLayoutComponent} from '../../components/admin-layout/admin-layout.component';
import {AllBooksService} from '../../services/all-books.service';
import {DatePipe, NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';

import { BrnDialogContentDirective, BrnDialogTriggerDirective } from '@spartan-ng/brain/dialog';
import {
  HlmDialogComponent,
  HlmDialogContentComponent,
  HlmDialogFooterComponent,
  HlmDialogHeaderComponent,
} from '@spartan-ng/ui-dialog-helm';

@Component({
  selector: 'app-all-books',
  imports: [
    AdminLayoutComponent,
    DatePipe,
    RouterLink,
    BrnDialogTriggerDirective,
    BrnDialogContentDirective,
    HlmDialogComponent,
    HlmDialogContentComponent,
    HlmDialogHeaderComponent,
    HlmDialogFooterComponent,
    HlmDialogContentComponent,
    NgOptimizedImage,
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

}

import {Component, inject, OnInit} from '@angular/core';
import {AdminLayoutComponent} from '../../components/admin-layout/admin-layout.component';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {AllBooksService} from '../all-books/all-books.service';

@Component({
  selector: 'app-edit-book',
  imports: [
    AdminLayoutComponent
  ],
  templateUrl: './edit-book.component.html',
})
export class EditBookComponent implements OnInit {
  private _location = inject(Location);

  private _route = inject(ActivatedRoute);

  private _allBooksService = inject(AllBooksService);

  goBack() {
    this._location.back();
  }

  bookId!: any;
  book!: any;

  ngOnInit() {
    this.bookId = this._route.snapshot.paramMap.get('id');
    this.book = this._allBooksService.getAllBooks.at(this.bookId - 1);
  }
}

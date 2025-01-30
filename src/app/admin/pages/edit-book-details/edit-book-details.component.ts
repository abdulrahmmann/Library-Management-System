import {Component, inject, OnInit} from '@angular/core';
import {AdminLayoutComponent} from "../../components/admin-layout/admin-layout.component";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Location, NgOptimizedImage} from "@angular/common";
import {ActivatedRoute} from '@angular/router';
import {AllBooksService} from '../../services/all-books.service';

@Component({
  selector: 'app-edit-book-details',
  imports: [
    AdminLayoutComponent,
    FormsModule,
    NgOptimizedImage,
    ReactiveFormsModule
  ],
  templateUrl: './edit-book-details.component.html',
  styles: ``
})
export class EditBookDetailsComponent implements OnInit {
  private _location = inject(Location);

  private _route = inject(ActivatedRoute);

  private _allBooksService = inject(AllBooksService)

  bookId!: any;
  book!: any;

  editBookForm = new FormGroup({
    bookTitleControl: new FormControl('', {
      validators: [Validators.required, Validators.minLength(8), Validators.maxLength(60)]
    }),
    bookAuthorControl: new FormControl('', {
      validators: [Validators.required, Validators.minLength(8), Validators.maxLength(60)]
    }),
    bookGenreControl: new FormControl('', {
      validators: [Validators.required, Validators.minLength(4), Validators.maxLength(100)]
    }),
    bookTotalControl: new FormControl('', {
      validators: [Validators.required, Validators.minLength(0)]
    }),
    bookSummaryControl: new FormControl('', {
      validators: [Validators.required, Validators.minLength(8), Validators.maxLength(60)]
    }),
    bookImageControl: new FormControl('', {
      validators: [Validators.required]
    }),
    bookVideoControl: new FormControl('', {
      validators: [Validators.required]
    }),
    bookColorControl: new FormControl('', {
      validators: [Validators.required]
    })
  })

  ngOnInit() {
    this.bookId = this._route.snapshot.paramMap.get('id');
    this.book = this._allBooksService.getAllBooks.at(this.bookId - 1)

    if (this.book) {
      this.editBookForm.patchValue({
        bookTitleControl: this.book.title,
        bookAuthorControl: this.book.author,
        bookGenreControl: this.book.genre,
        bookSummaryControl: this.book.summery,
        bookImageControl: this.book.bookPoster,
        bookVideoControl: this.book.bookVideo,
        bookColorControl: this.book.color
      });
    }
  }

  goBack() {
    this._location.back();
  }


  onSubmit() {
    if (this.editBookForm.valid) {
      console.log('Form submitted successfully');
      console.log('bookTitleControl:', this.editBookForm.value.bookTitleControl);
      console.log('bookAuthorControl:', this.editBookForm.value.bookAuthorControl);
      console.log('bookGenreControl:', this.editBookForm.value.bookGenreControl);
      console.log('bookTotalControl:', this.editBookForm.value.bookTotalControl);
      console.log('bookSummaryControl:', this.editBookForm.value.bookSummaryControl);
    } else {
      console.log('Form is invalid. Please check the input fields.');
    }
  }


}

import {Component, inject} from '@angular/core';
import {AdminLayoutComponent} from '../../components/admin-layout/admin-layout.component';
import {Location, NgOptimizedImage} from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-new-book',
  imports: [
    AdminLayoutComponent,
    ReactiveFormsModule,
    NgOptimizedImage
  ],
  templateUrl: './create-new-book.component.html',
})
export class CreateNewBookComponent {
  private _location = inject(Location);

  goBack() {
    this._location.back();
  }

  createBookForm = new FormGroup({
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

  onSubmit() {
    if (this.createBookForm.valid) {
      console.log('Form submitted successfully');
      console.log('bookTitleControl:', this.createBookForm.value.bookTitleControl);
      console.log('bookAuthorControl:', this.createBookForm.value.bookAuthorControl);
      console.log('bookGenreControl:', this.createBookForm.value.bookGenreControl);
      console.log('bookTotalControl:', this.createBookForm.value.bookTotalControl);
      console.log('bookSummaryControl:', this.createBookForm.value.bookSummaryControl);
    } else {
      console.log('Form is invalid. Please check the input fields.');
    }
  }

}

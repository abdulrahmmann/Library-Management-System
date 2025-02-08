import {Component, inject} from '@angular/core';
import {AdminLayoutComponent} from '../../components/admin-layout/admin-layout.component';
import {Location, NgOptimizedImage} from '@angular/common';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { ColorPickerModule } from 'primeng/colorpicker';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

// interface UploadEvent {
//   originalEvent: Event;
//   files: File[];
// }

@Component({
  selector: 'app-create-new-book',
  imports: [
    AdminLayoutComponent,
    ReactiveFormsModule,
    NgOptimizedImage,
    ColorPickerModule,
    FormsModule,
    ToastModule,
  ],
  providers: [MessageService],
  templateUrl: './create-new-book.component.html',
})

export class CreateNewBookComponent {
  private _location = inject(Location);

  goBack() {
    this._location.back();
  }

  color: string = '#ffffff';
  updateColor(event: any) {
    this.color = event.value;
  }

  // constructor(private messageService: MessageService) { }
  //
  // onBasicUploadAuto(event: UploadEvent) {
  //   this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode' });
  // }


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

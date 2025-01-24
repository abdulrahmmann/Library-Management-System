import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {NgClass} from '@angular/common';
import {AuthLayoutComponent} from '../../components/auth-layout/auth-layout.component';

@Component({
  selector: 'app-signin',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    NgClass,
    AuthLayoutComponent,
  ],
  templateUrl: './signin.component.html',
})
export class SigninComponent {
  signinForm = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email, Validators.minLength(8), Validators.maxLength(50)]
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(8), Validators.maxLength(50)]
    })
  });

  onSubmit() {
    if (this.signinForm.valid) {
      console.log('Form submitted successfully');
      console.log('Email:', this.signinForm.value.email);
      console.log('Password:', this.signinForm.value.password);
    } else {
      console.log('Form is invalid. Please check the input fields.');
    }
  }

  showPassword: boolean = false;
  togglePasswordVisibility() {
    this.showPassword =!this.showPassword;
  }

  get emailIsInvalid() {
    return this.signinForm.controls.email.invalid &&
           this.signinForm.controls.email.dirty &&
           this.signinForm.controls.email.touched;
  }

  get passwordIsInvalid() {
    return this.signinForm.controls.password.invalid &&
      this.signinForm.controls.password.dirty &&
      this.signinForm.controls.password.touched;
  }

}

import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {NgClass} from '@angular/common';
import {AuthLayoutComponent} from '../../components/auth-layout/auth-layout.component';

@Component({
  selector: 'app-signup',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    NgClass,
    AuthLayoutComponent
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupForm = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email, Validators.minLength(8), Validators.maxLength(50)]
    }),
    fullName: new FormControl('', {
      validators: [Validators.required, Validators.minLength(8), Validators.maxLength(50)]
    }),
    universityId: new FormControl('', {
      validators: [Validators.required, Validators.minLength(8), Validators.maxLength(50)]
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(8), Validators.maxLength(50)]
    }),
  });

  onSubmit() {
    if (this.signupForm.valid) {
      console.log('Form submitted successfully');
      console.log('Full Name:', this.signupForm.value.fullName);
      console.log('Email:', this.signupForm.value.email);
      console.log('University ID:', this.signupForm.value.universityId);
      console.log('Password:', this.signupForm.value.password);
    } else {
      console.log('Form is invalid. Please check the input fields.');
    }
  }

  showPassword: boolean = false;

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  showUniversityId: boolean = false;

  toggleUniversityIdVisibility(): void {
    this.showUniversityId = !this.showUniversityId;
  }

  get emailIsInvalid() {
    return this.signupForm.controls.email.invalid &&
      this.signupForm.controls.email.dirty &&
      this.signupForm.controls.email.touched
  }

  get passwordIsInvalid() {
    return this.signupForm.controls.password.invalid &&
      this.signupForm.controls.password.dirty &&
      this.signupForm.controls.password.touched
  }

  get fullNameIsInvalid() {
    return this.signupForm.controls.fullName.invalid &&
      this.signupForm.controls.fullName.dirty &&
      this.signupForm.controls.fullName.touched
  }

  get universityIdIsInvalid() {
    return this.signupForm.controls.universityId.invalid &&
      this.signupForm.controls.universityId.dirty &&
      this.signupForm.controls.universityId.touched
  }

  isFormValid(): boolean {
    return !this.emailIsInvalid &&
      !this.passwordIsInvalid &&
      !this.fullNameIsInvalid &&
      !this.universityIdIsInvalid;
  }

  private router = inject(Router);

  onSignUpClick(): void {
    if (this.isFormValid()) {
      this.router.navigate(['/home']);
    } else {
      alert('Please fill out all fields correctly.');
    }
  }
}

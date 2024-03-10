import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  isPasswordVisible: boolean = false;
  passwordIconToDisplay: string = 'visibility';
  isConfirmPasswordVisible: boolean = false;
  confirmPasswordIconToDisplay: string = 'visibility';

  constructor(private fb: FormBuilder) {}

  signupForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    userName: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  });

  onSubmit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
    } else {
      alert('Please fill the valid credentials.!');
    }
  }

  togglePasswordVisibililty() {
    this.isPasswordVisible = !this.isPasswordVisible;
    this.passwordIconToDisplay === 'visibility'
      ? (this.passwordIconToDisplay = 'visibility_off')
      : (this.passwordIconToDisplay = 'visibility');
  }

  toggleConfirmPasswordVisibililty() {
    this.isConfirmPasswordVisible = !this.isConfirmPasswordVisible;
    this.confirmPasswordIconToDisplay === 'visibility'
      ? (this.confirmPasswordIconToDisplay = 'visibility_off')
      : (this.confirmPasswordIconToDisplay = 'visibility');
  }
}

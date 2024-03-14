import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

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

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  signupForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
    lastName: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
    userName: [
      '',
      [Validators.required, Validators.pattern(/^[a-zA-Z0-9.@]+$/)],
    ],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/),
      ],
    ],
    password: [
      '',
      [
        Validators.required,
        Validators.pattern(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/
        ),
      ],
    ],
    confirmPassword: ['', Validators.required],
  });

  onSubmit() {
    console.log(this.signupForm);
    if (this.signupForm.valid) {
      this.userService.registerUser(this.signupForm.value).subscribe({
        next: (val: any) => {
          console.log(val);
        },
        error: console.log,
      });
      alert('User registered successfully.!');
      this.router.navigate(['/login']);
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

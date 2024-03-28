import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApplicationService } from 'src/app/services/application/application.service';
import { AuthService } from 'src/app/services/auth/auth.service';
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
  sendSignupValues!: any;

  generatedAlert!: string;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private authService: AuthService,
    private appService: ApplicationService
  ) {}

  signupForm = this.fb.group({
    firstname: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
    lastname: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
    username: [
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
    // console.log(this.signupForm);
    if (this.signupForm.valid) {
      // this.userService.registerUser(this.signupForm.value).subscribe({
      //   next: (val: any) => {
      //     console.log(val);
      //   },
      //   error: console.log,
      // });

      this.sendSignupValues = this.signupForm.value;

      //deleting confirmPassword as it is not required
      delete this.sendSignupValues.confirmPassword;

      //adding the isAdmin property
      this.sendSignupValues.isAdmin = false;

      console.log(this.signupForm.value);

      this.authService.userSignUp(this.sendSignupValues).subscribe({
        next: (res) => {
          console.log(res);
          // alert('User Signup successfull!');
          this.generatedAlert = this.appService.alertMsg(
            'success',
            'Signup successfull!'
          );
          // Set a timeout to clear the alert message after 3 seconds
          setTimeout(() => {
            this.generatedAlert = '';
          }, 3000);
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.log(err);
          this.generatedAlert = this.appService.alertMsg(
            'danger',
            'Signup Unsuccessfull, try with another email and username!'
          );
          // Set a timeout to clear the alert message after 3 seconds
          setTimeout(() => {
            this.generatedAlert = '';
          }, 3000);
        },
      });
    } else {
      // alert('Please fill the valid credentials.!');
      this.generatedAlert = this.appService.alertMsg(
        'info',
        'Please fill the valid credentials.!'
      );
      // Set a timeout to clear the alert message after 3 seconds
      setTimeout(() => {
        this.generatedAlert = '';
      }, 3000);
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

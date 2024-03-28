import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApplicationService } from 'src/app/services/application/application.service';
import { AuthService } from 'src/app/services/auth/auth.service';
// import { AuthServiceService } from 'src/app/services/auth/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isPasswordVisible: boolean = false;
  passwordIconToDisplay: string = 'visibility';
  //For Authentication
  users!: any; // To store the values from Json server for users.
  admin!: any; // To store the values from Json server for admin.
  uiValues?: any; // To store the values got from UI.
  isUserValid: boolean = false;
  isAdminValid: boolean = false;

  generatedAlert!: string;
  // errHead!: boolean;

  togglePasswordVisibililty() {
    this.isPasswordVisible = !this.isPasswordVisible;
    this.passwordIconToDisplay === 'visibility'
      ? (this.passwordIconToDisplay = 'visibility_off')
      : (this.passwordIconToDisplay = 'visibility');
  }

  constructor(
    private fb: FormBuilder,
    // private auth: AuthServiceService,
    private router: Router,
    private elementRef: ElementRef,
    private authService: AuthService,
    private appService: ApplicationService
  ) {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
      'white';
  }

  ngOnInit(): void {
    this.getRolesList();
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/index']);
    }
  }

  signInForm = this.fb.group({
    userName: [
      '',
      [Validators.required, Validators.pattern(/^[a-zA-Z0-9.@]+$/)],
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
  });

  onLogin() {
    this.uiValues = this.signInForm.value;
    console.log(this.uiValues);

    console.log(this.users);

    if (this.signInForm.valid) {
      // this.authService.login(this.signInForm.value, this.users).subscribe({
      //   next: (result) => {
      //     console.log(result);
      //     this.router.navigate(['/index']);
      //     alert('Login Successfull.!');
      //   },
      //   error: (err: Error) => {
      //     alert(err.message);
      //   },
      // });

      this.authService.login(this.uiValues).subscribe({
        next: (res) => {
          // console.log(res);
          this.authService.setLoggedInUser(res);
          this.router.navigate(['index']);
        },
        error: (error) => {
          // console.error(error);
          // alert('Incorrect Credentials!');
          this.generatedAlert = this.appService.alertMsg(
            'danger',
            'Incorrect Credentials!'
          );
          // Set a timeout to clear the alert message after 3 seconds
          setTimeout(() => {
            this.generatedAlert = '';
          }, 3000);
        },
      });

      // for (let i = 0; i < this.users?.length; i++) {
      //   if (
      //     this.uiValues?.userName === this.users[i]?.userName &&
      //     this.uiValues?.password === this.users[i]?.password
      //   ) {
      //     this.isUserValid = true;
      //   }
      // }
      // if (this.isUserValid === true) {
      //   alert('User Login Successfull');
      //   this.router.navigate(['/index']);
      //   // this.isUserValid = false;
      // } else {
      //   alert('User Login Failed');
      // }
    } else {
      // alert('All the fields are mandatory!');
      this.generatedAlert = this.appService.alertMsg(
        'info',
        'All the fields are mandatory!'
      );
      // Set a timeout to clear the alert message after 3 seconds
      setTimeout(() => {
        this.generatedAlert = '';
      }, 3000);
    }

    // console.log(this.signInForm.value);
    // console.log(this.signInForm);
    // this.router.navigate(['/index']);
  }

  getRolesList() {
    this.authService.getUsersList().subscribe({
      next: (uList: any) => {
        this.users = uList;
      },
      error: console.log,
    });
    // this.authService.getAdminsList().subscribe({
    //   next: (aList: any) => {
    //     this.admin = aList;
    //   },
    //   error: console.log,
    // });
  }
}

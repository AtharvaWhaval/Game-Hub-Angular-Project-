import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
// import { AuthServiceService } from 'src/app/services/auth/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isPasswordVisible: boolean = false;
  passwordIconToDisplay: string = 'visibility';

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
    private elementRef: ElementRef
  ) {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
      'white';
  }

  ngOnInit(): void {
    // if (this.auth.isLoggedIn()) {
    //   this.router.navigate(['user-home']);
    // }
  }

  signInForm = this.fb.group({
    userName: '',
    password: '',
  });

  onSubmit() {
    // console.log(this.signInForm.value);
    // console.log(this.signInForm);
    if (this.signInForm.valid) {
      // this.auth.login(this.signInForm.value).subscribe({
      //   next: (result) => {
      //     console.log(result);
      //     this.router.navigate(['user-home']);
      //   },
      //   error: (err: Error) => {
      //     alert(err.message);
      //   },
      // });
      console.log(this.signInForm.value);
      console.log(this.signInForm);
      this.router.navigate(['/index'])
    }
  }
}

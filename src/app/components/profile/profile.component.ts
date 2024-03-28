import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  loggedInUser: any;
  usersString: any;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // this.getUser();
    // this.usersString = localStorage.getItem('LoggedInUser');
    // console.log(JSON.parse(this.usersString));
    // this.loggedInUser = JSON.parse(this.usersString);
    this.loggedInUser = this.authService.getLoggedInUser();
    console.log(this.loggedInUser);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  loggedInUser: any;
  usersString: any;

  ngOnInit(): void {
    // this.getUser();
    this.usersString = localStorage.getItem('LoggedInUser');
    console.log(JSON.parse(this.usersString));
    this.loggedInUser = JSON.parse(this.usersString);
  }
}

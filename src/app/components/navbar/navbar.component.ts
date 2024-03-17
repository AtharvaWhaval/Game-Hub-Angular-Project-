import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  loggedInUser: any;
  usersString: any;
  constructor(private authService: AuthService, private router: Router) {}

  isDropdownOpen: boolean = false;
  isFlyoutMenuOpen: boolean = false;

  ngOnInit(): void {
    // this.getUser();
    this.usersString = localStorage.getItem('LoggedInUser');
    console.log(JSON.parse(this.usersString));
    this.loggedInUser = JSON.parse(this.usersString);
  }

  getUser() {
    this.authService.getLoggedInUser().subscribe({
      next: (res: any) => {
        this.loggedInUser = res;
        console.log(res);
      },
      error: console.log,
    });
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  openProfilePage() {
    // this.router.navigate(['./profile']);
    this.isDropdownOpen = false;
  }
  // closeDropdown() {
  //   this.isDropdownOpen = false;
  // }
  logout() {
    this.authService.logout();
    // this.isDropdownOpen = false;
  }

  toggleFlyoutMenu() {
    this.isFlyoutMenuOpen = !this.isFlyoutMenuOpen;
  }
}

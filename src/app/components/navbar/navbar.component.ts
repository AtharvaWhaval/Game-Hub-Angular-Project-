import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private authService: AuthService, private router: Router) {}

  isDropdownOpen:boolean = false;
  isFlyoutMenuOpen:boolean = false;
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

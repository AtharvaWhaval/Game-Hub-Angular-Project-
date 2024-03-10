import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
isDropdownOpen = false;
toggleDropdown() {
  this.isDropdownOpen = !this.isDropdownOpen;
}
closeDropdown() {
  this.isDropdownOpen = false;
}
}

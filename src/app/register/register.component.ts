import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}

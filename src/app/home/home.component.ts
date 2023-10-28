import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isScrolled = false;
  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (window.scrollY > 50) { // Adjust the scroll threshold as needed
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  showNav = false;

  constructor(private router: Router) {}

  toggleMenu() {
    this.showNav = !this.showNav;
  }

  closeMenu() {
    this.showNav = false;
  }

  
  navigateTo(route: string) {
    this.router.navigate([route]);
    this.closeMenu();
  }
}

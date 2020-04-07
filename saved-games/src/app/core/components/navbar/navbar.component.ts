import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sg-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLoginPage = false;

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.hideNavbarOnLogin();
  }

  hideNavbarOnLogin(): void {
    this.route.events.subscribe((navigation: NavigationEnd) => {
      if (navigation instanceof NavigationEnd) {
        this.isLoginPage = navigation.url.includes('/login');
      }
    });
  }

  isNotLoginPage(): boolean {
    if (this.isLoginPage === true) {
      return false;
    } else {
      return true;
    }
  }

}

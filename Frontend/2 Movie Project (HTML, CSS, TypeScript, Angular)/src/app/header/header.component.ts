import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private authservice: AuthService) { }

  ngOnInit(): void {
  }

  OnLogout() {
    this.authservice.logout()
  }

  OnGoToHome() {
    this.router.navigate(['./home'])
  }
}

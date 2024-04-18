import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  login(usern: string, passw: string) {
    if (usern === 'Rade' && passw === '1357') {
      return 200;
    } else {
      return 403;
    }
  }

  logout() {
    this.router.navigate(['./login']);
  }
}

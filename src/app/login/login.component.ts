import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient,
    private router: Router,
  ) {}

  registerUser() {
    this.router.navigate(['/register']);
  }

  submitLogin() {
    console.log('Username:', this.email);
    console.log('Password:', this.password);

    this.http.post<any>('http://127.0.0.1:5000/login', { username: this.email, password: this.password })
      .subscribe(
        response => {
          console.log('Response:', response);
          if (response && response.identifier) {
            localStorage.setItem('identifier', response.identifier);
            this.router.navigate(['/home']);
            localStorage.setItem('identifier', response.identifier);
          }
        },
        error => {
          console.error('Error:', error);
        }
      );
}

}

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {
  email: string = '';
  password: string = '';
  repeatPassword: string = '';
  identifier: number = 0;

  constructor(private http: HttpClient,
    private router: Router,
  ) {}

  registerUser() {
    if (this.password != this.repeatPassword) {
      console.error('Passwords do not match');
      return;
    }

    const userData = {
      email: this.email,
      password: this.password
    };

    this.http.post<any>('http://127.0.0.1:5000/register', userData)
      .subscribe(
        response => {
          console.log('Response:', response);
          // Handle success
          if (response && response.identifier) {
            this.identifier = response.identifier;
            this.router.navigate(['/home']);
            localStorage.setItem('identifier', response.identifier);
          }
        },
        error => {
          console.error('Error:', error);
          // Handle error, display error message to the user
        }
    );
  }
}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  identifier: number = 0;
  constructor(private router: Router) { }

  ngOnInit(): void {
    const storedIdentifier = localStorage.getItem('identifier');
    if (storedIdentifier !== null) {
        this.identifier = parseInt(storedIdentifier, 10);
        console.log('Identifier found:', this.identifier);
        // You can add any other actions you need here
    } else {
        this.identifier = 0;
        console.log('Identifier not found.');
    }
  }

  addEntry() {
    this.router.navigate(['/add-product']);
  }

  navigateToSearch() {
    this.router.navigate(['/search-result/baby']);
  }

  login() {
    this.router.navigate(['/login']);
  }
}

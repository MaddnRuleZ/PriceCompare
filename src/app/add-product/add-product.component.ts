import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  item: string = '';
  url: string = '';
  price: number = 0;
  item_category: string = '';
  category: string = '';

  constructor(private http: HttpClient) { }

  submitForm() {
    const data = {
      item: this.item,
      url: this.url,
      price: this.price,
      item_category: this.item_category,
      category: this.category
    };

    this.http.post<any>('http://127.0.0.1:5000/insert_data', data)
    .subscribe(
      (response) => {
        console.log('Response from server:', response);
        // Handle response from server as needed
      },
      (error) => {
        console.error('Error:', error);
        // Handle error
      }
    );
  }
}
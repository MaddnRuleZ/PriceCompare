import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SearchResult } from '../classes/search-result';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})

export class CompareComponent implements OnInit {
  itemCategory!: string;
  itemId!: string;
  searchResults: SearchResult[] = [];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

   ngOnInit(): void {
    // Get the itemCategory and itemId from the route parameters
    this.route.params.subscribe(params => {
      this.itemCategory = params['itemCategory'];
      this.itemId = params['itemId'];

      // Make GET request to the endpoint
      this.http.get<SearchResult[]>(`http://127.0.0.1:5000/getItem/${this.itemCategory}/${this.itemId}`).subscribe(
        (data) => {
          this.searchResults = data; // Assign received data to searchResults array
          console.log(this.searchResults);
        },
        (error) => {
          console.error('Error fetching item data:', error);
        }
      );
    });
  }

  navigateToCompare(input: number) {
    // Search for an entry with the same id as the input parameter
    const result = this.searchResults.find(item => item.id === input);
    if (result) {
      // Open the link in a new tab if found
      window.open(result.link, '_blank');
    } else {
      console.log('Item not found');
    }
  }
}
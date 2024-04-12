import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SearchResult } from '../classes/search-result';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})

export class SearchResultsComponent implements OnInit {
  searchResults: SearchResult[] = [];
  private searchText = "";

  constructor(private http: HttpClient,  
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      // Get the parameter from the route
      this.route.params.subscribe(params => {
        const searchText = params['category'];
        this.searchText = searchText
        console.debug(searchText);
  
        // Make HTTP request to fetch search results data based on the received parameter
        this.http.get<SearchResult[]>(`http://127.0.0.1:5000/getData/${searchText}`).subscribe(
          (data: SearchResult[]) => {
            this.searchResults = data;
            console.debug(this.searchResults);
          },
          (error) => {
            console.error('Error fetching search results:', error);
          }
        );
      });
    }

  navigateToCompare(itemCategory: number): void {
    this.router.navigate(['/compare', this.searchText, itemCategory]);
  }
}
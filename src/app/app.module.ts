import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { CompareComponent } from './compare/compare.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search-result/:category', component: SearchResultsComponent },
  { path: 'compare/:itemCategory/:itemId', component: CompareComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchResultsComponent,
    CompareComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

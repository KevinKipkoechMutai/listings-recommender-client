import { Component, OnInit } from '@angular/core';
import { Listing } from '../types/listing.type';
import { ListingsService } from '../services/listings.service';
import { CommonModule } from '@angular/common';  
import { HttpClient, provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})  
export class HomeComponent implements OnInit {
  listings: Listing[] = [];
  loading: boolean = true;
  error: string = ''; 

  trackById(index: number, listing: Listing): number {
    return listing.id ?? index;
  }

  constructor(private listingsService: ListingsService) {}

  // get all listings
  ngOnInit(): void {
    this.listingsService.getAllListings().subscribe({
      next: (data) => {
        this.listings = data;
        //console.log(data)
        this.loading = false;  
      },
      error: (err) => {
        this.error = 'An error occurred while loading listings.'; 
        this.loading = false;
      },
    });
  }

  // Delete a listing
  deleteListing(id: number): void {
    this.listingsService.deleteListing(id).subscribe({
      next: () => {
        this.listings = this.listings.filter((listing) => listing.id !== id);
      },
      error: (err) => {
        this.error = 'Failed to delete the listing. Please try again later.'; // Error handling
      },
    });
  }
}

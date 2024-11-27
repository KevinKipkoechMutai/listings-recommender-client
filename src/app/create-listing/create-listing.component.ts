import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ListingsService } from "../services/listings.service";
import { Listing } from "../types/listing.type";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-create-listing',
  templateUrl: './create-listing.component.html',
  styleUrls: ['./create-listing.component.scss'],
  imports: [FormsModule]
})
export class CreateListingComponent {
  listing: Listing = {
    title: '',
    location: '',
    price_cash: '0',
    price_mortgage: '0',
    development_status: 'completed',
    description: '',
    image_url: '',
  };

  constructor(
    private listingService: ListingsService, 
    private router: Router
  ) {}

  onSubmit() {
    this.listingService.createListing(this.listing).subscribe({
      next: (response) => {
        console.log('Listing created successfully', response);
        this.router.navigate(['/']);
        alert('Listing created successfully');
      },
      error: (error) => {
        console.error('Error creating listing:', error);
        alert('Error creating listing');
      }
    });
  }
}
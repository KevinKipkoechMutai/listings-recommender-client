import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from "@angular/forms"
import { ListingsService } from '../services/listings.service';


@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss'],
  imports: [NgIf, FormsModule]
})
export class RecommendationComponent {
  salary: number = 0;
  savings: number = 0;
  existing_loans: number = 0;
  loading: boolean = false;
  cashListings: any[] = [];
  mortgageListings: any[] = [];

  constructor(private listingsService: ListingsService) {}

  fetchRecommendations(): void {
    this.loading = true;
    const data = { salary: this.salary, savings: this.savings, existing_loans: this.existing_loans };
    console.log(data)

    this.listingsService.getRecommendations(data).subscribe((response) => {
      console.log(response)
      this.cashListings = response.cash_affordable_listings;
      this.mortgageListings = response.mortgage_affordable_listings;
      this.loading = false;
    });
  }
}

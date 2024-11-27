import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Listing, RecommendationRequest, RecommendationResponse } from '../types/listing.type';

@Injectable({
  providedIn: 'root',
})
export class ListingsService {
  private baseUrl = 'https://listings-recommender-server.onrender.com/api';

  constructor(private http: HttpClient) {}

  // Get all listings
  getAllListings(): Observable<Listing[]> {
    return this.http.get<Listing[]>(`${this.baseUrl}/listings/`);
  }

  // Get recommended listings
  getRecommendations(data: RecommendationRequest): Observable<RecommendationResponse> {
    return this.http.post<RecommendationResponse>(`${this.baseUrl}/recommend/`, data);
  }

  // Create a listing
  createListing(data: Listing): Observable<Listing> {
    return this.http.post<Listing>(`${this.baseUrl}/create-listing/`, data);
  }

  // Delete a listing
  deleteListing(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete-listing/${id}`);
  }
}

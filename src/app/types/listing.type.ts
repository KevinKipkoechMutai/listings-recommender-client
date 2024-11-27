export interface Listing {
    id?: number;
    title: string;
    location: string;
    price_cash: string;  
    price_mortgage: string; 
    development_status: 'completed' | 'under_construction' | 'offplan';
    description: string;
    image_url: string;
    created_at?: string;
  }

  export interface RecommendationRequest {
    salary: number;
    existing_loans: number;
    savings: number;
  }

  export interface RecommendationResponse {
    disposable_income: number;
    cash_affordable_listings: Listing[];
    mortgage_affordable_listings: Listing[];
  }
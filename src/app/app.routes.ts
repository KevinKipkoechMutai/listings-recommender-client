import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./home/home.component').then((m)=>m.HomeComponent)
        }
    },
    {
        path: 'recommendations',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./recommendation/recommendation.component').then((m)=>m.RecommendationComponent)
        }
    },
    {
        path: 'create-listing',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./create-listing/create-listing.component').then((m)=>m.CreateListingComponent)
        }
    }
];

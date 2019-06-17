import { TestBed } from '@angular/core/testing';

import { MovieService } from './movie.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AdminComponent } from './admin/admin.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('MovieService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [ 
      DashboardComponent, 
      MovieSearchComponent,
      MoviesComponent,
      MovieDetailComponent,
      CheckoutComponent,
      AdminComponent
    ],
    
    imports: [ 
      AppRoutingModule,
      ReactiveFormsModule,
      FormsModule,
      HttpClientModule,
    ]
  }));

  it('should be created', () => {
    const service: MovieService = TestBed.get(MovieService);
    expect(service).toBeTruthy();
  });
});

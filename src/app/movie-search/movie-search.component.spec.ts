import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSearchComponent } from './movie-search.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MoviesComponent } from '../movies/movies.component';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
import { CheckoutComponent } from '../checkout/checkout.component';
import { AdminComponent } from '../admin/admin.component';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('MovieSearchComponent', () => {
  let component: MovieSearchComponent;
  let fixture: ComponentFixture<MovieSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

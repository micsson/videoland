import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailComponent } from './movie-detail.component';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from '../admin/admin.component';
import { CheckoutComponent } from '../checkout/checkout.component';
import { MoviesComponent } from '../movies/movies.component';
import { MovieSearchComponent } from '../movie-search/movie-search.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

describe('MovieDetailComponent', () => {
  let component: MovieDetailComponent;
  let fixture: ComponentFixture<MovieDetailComponent>;

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
    fixture = TestBed.createComponent(MovieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

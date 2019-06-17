import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesComponent } from './movies.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MovieSearchComponent } from '../movie-search/movie-search.component';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
import { CheckoutComponent } from '../checkout/checkout.component';
import { AdminComponent } from '../admin/admin.component';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MockDataService } from '../mock-data/mock-data.service';
import { MovieService } from '../movie.service';

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        DashboardComponent, 
        MovieSearchComponent,
        MoviesComponent,
        MovieDetailComponent,
        CheckoutComponent,
        AdminComponent,
        
      ],
      
      imports: [ 
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        // MovieService,
        // MockDataService,
      ]
    })
    // .overrideComponent(MoviesComponent, {
    //   set: {
    //     providers: [{provide: MovieService, useClass: MockDataService }]
    //   }
    // })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  // it('should contain 3 movies', () => {
  //   expect(component.movies.length).toBe(3);
  // });
});

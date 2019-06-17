import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { MoviesComponent } from '../movies/movies.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
import { AdminComponent } from '../admin/admin.component';


import { CheckoutComponent } from './checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieSearchComponent } from '../movie-search/movie-search.component';
import { AppComponent } from '../app.component';
import { CartComponent } from '../cart/cart.component';

describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        AppComponent,
        CheckoutComponent, 
        MoviesComponent, 
        DashboardComponent,
        MovieDetailComponent,
        AdminComponent,
        MovieSearchComponent,
        CartComponent,
         ],

      imports: [ 
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        ],
        providers: [{ provide: ActivatedRoute }],
      })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

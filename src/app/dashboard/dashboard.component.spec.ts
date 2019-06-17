import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { MovieSearchComponent } from '../movie-search/movie-search.component';
import { AppRoutingModule } from '../app-routing.module';
import { MoviesComponent } from '../movies/movies.component';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
import { CheckoutComponent } from '../checkout/checkout.component';
import { AdminComponent } from '../admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        DashboardComponent, 
        MovieSearchComponent,
        MoviesComponent,
        MovieDetailComponent,
        CheckoutComponent,
        AdminComponent ],

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
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

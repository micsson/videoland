import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
// import { MOVIES } from '../mock-movies';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {

  movies: Movie[];
  
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    // this.getMovies();
    this.movieService.getMovies()
    .subscribe(movies => {
      this.movies = movies;
      console.log("Got movies: ", movies);
    });
  }

  getMovies(): void {
    this.movieService.getMovies()
      .subscribe(movies => {
        console.log("Got movies: ", movies);
        this.movies = movies;
      });
  }

}
import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MOVIES } from '../mock-movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies =  MOVIES;

  movie: Movie = {
    id: 1,
    name: 'Windstorm'
  };
  constructor() { }

  ngOnInit() {
  }

}

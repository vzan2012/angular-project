import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IMovies } from './movie';
import { IMovieCard } from './movie-card';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  private sourceURL:string = "https://green-it-pri.herokuapp.com/";

  constructor(private http: HttpClient) { }

  getMoviePosters(): Observable<IMovies[]> {
    return this.http.get<IMovies[]>("/movies/");
  }

  getMovieCard(): Observable<IMovieCard[]>{
    return this.http.get<IMovieCard[]>("/3/discover/movie/?api_key=72c296964eb65073c84ebd4df800f271&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false");
  }

}

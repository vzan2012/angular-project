import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { IMovies } from './movie';
import { IMovieCard } from './movie-card';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  private sourceURL:string = "https://green-it-pri.herokuapp.com/";

  constructor(private http: HttpClient) { }

  getMoviePosters(): Observable<IMovies[]> {
    return this.http.get<IMovies[]>("/movies/").pipe(catchError(this.errorHandler));
  }

  getMovieCard(): Observable<IMovieCard[]>{
    return this.http.get<IMovieCard[]>("/movies/").pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error");
  }

}

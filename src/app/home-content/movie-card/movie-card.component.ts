import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../../movies.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  public getMovieCard = []

  constructor(private _moviesService: MoviesService) { }

  ngOnInit() {
    this._moviesService.getMovieCard().subscribe(data => this.getMovieCard = data);

    //console.log(this.getMovieCard);
  }

}

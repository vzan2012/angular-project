import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-slider',
  templateUrl: './movie-slider.component.html',
  styleUrls: ['./movie-slider.component.css']
})
export class MovieSliderComponent implements OnInit {

  public getMoviePosters = [];

  public errorMsg;

  customOptions: any = {
    	nav: true,
        loop: true,
        margin: 30,
        sliderBy: 4,
        dotsEach: false,
        autoHeight: true,
        autoWidth: true,
    	autoplay: true,
    	autoplayTimeout: 2000,
    	autoplayHoverPause: true,	    
        responsiveClass: true,
        navText: ['<i class="fa fa-angle-left fa-2x"></i>','<i class="fa fa-angle-right fa-2x"></i>'],
        responsive:{
            0:{
                items: 2
            },
            360:{
                items: 2
            },	        
            480:{
                items: 2
            },
            600:{
                items: 3
            },
            1000:{
                items: 4
            }
        }
    }

  constructor(private _moviesService: MoviesService) { }

  ngOnInit() {
    this._moviesService.getMoviePosters()
    .subscribe(data => this.getMoviePosters = data,
                error => this.errorMsg = error);
  }

}

import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';
import { load } from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'angular-project';

  creload() {
    location.reload();
  }

  ngOnInit() {
    // Tooltip Scripts
    // location.reload();


    
	  //$('[data-toggle="tooltip"]').tooltip();
  }



}

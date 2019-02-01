import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {
  title = 'angular-project';

  ngOnInit() {
    // Tooltip Scripts
    // $(window).alert("TEST");
	  //$('[data-toggle="tooltip"]').tooltip();
  }
}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestMovieNewsComponent } from './latest-movie-news.component';

describe('LatestMovieNewsComponent', () => {
  let component: LatestMovieNewsComponent;
  let fixture: ComponentFixture<LatestMovieNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestMovieNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestMovieNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

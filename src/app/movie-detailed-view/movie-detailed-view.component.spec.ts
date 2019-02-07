import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailedViewComponent } from './movie-detailed-view.component';

describe('MovieDetailedViewComponent', () => {
  let component: MovieDetailedViewComponent;
  let fixture: ComponentFixture<MovieDetailedViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetailedViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

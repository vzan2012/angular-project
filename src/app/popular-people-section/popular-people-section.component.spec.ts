import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularPeopleSectionComponent } from './popular-people-section.component';

describe('PopularPeopleSectionComponent', () => {
  let component: PopularPeopleSectionComponent;
  let fixture: ComponentFixture<PopularPeopleSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularPeopleSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularPeopleSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

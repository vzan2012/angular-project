import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvSearchBoxComponent } from './adv-search-box.component';

describe('AdvSearchBoxComponent', () => {
  let component: AdvSearchBoxComponent;
  let fixture: ComponentFixture<AdvSearchBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvSearchBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

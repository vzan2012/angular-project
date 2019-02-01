import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickSearchBoxComponent } from './quick-search-box.component';

describe('QuickSearchBoxComponent', () => {
  let component: QuickSearchBoxComponent;
  let fixture: ComponentFixture<QuickSearchBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickSearchBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

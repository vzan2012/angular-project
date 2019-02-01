import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPageSectionComponent } from './contact-page-section.component';

describe('ContactPageSectionComponent', () => {
  let component: ContactPageSectionComponent;
  let fixture: ComponentFixture<ContactPageSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactPageSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPageSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

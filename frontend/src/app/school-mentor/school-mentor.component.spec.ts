import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolMentorComponent } from './school-mentor.component';

describe('SchoolMentorComponent', () => {
  let component: SchoolMentorComponent;
  let fixture: ComponentFixture<SchoolMentorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolMentorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPersonnalityComponent } from './admin-personnality.component';

describe('AdminPersonnalityComponent', () => {
  let component: AdminPersonnalityComponent;
  let fixture: ComponentFixture<AdminPersonnalityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPersonnalityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPersonnalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutsComponent } from './checkouts.component';

describe('CheckoutsComponent', () => {
  let component: CheckoutsComponent;
  let fixture: ComponentFixture<CheckoutsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckoutsComponent]
    });
    fixture = TestBed.createComponent(CheckoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

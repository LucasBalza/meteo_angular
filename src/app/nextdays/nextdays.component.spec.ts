import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextdaysComponent } from './nextdays.component';

describe('NextdaysComponent', () => {
  let component: NextdaysComponent;
  let fixture: ComponentFixture<NextdaysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NextdaysComponent]
    });
    fixture = TestBed.createComponent(NextdaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

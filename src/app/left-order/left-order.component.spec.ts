import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftOrderComponent } from './left-order.component';

describe('LeftOrderComponent', () => {
  let component: LeftOrderComponent;
  let fixture: ComponentFixture<LeftOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

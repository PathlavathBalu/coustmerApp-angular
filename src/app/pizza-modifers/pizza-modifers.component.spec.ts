import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaModifersComponent } from './pizza-modifers.component';

describe('PizzaModifersComponent', () => {
  let component: PizzaModifersComponent;
  let fixture: ComponentFixture<PizzaModifersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaModifersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaModifersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

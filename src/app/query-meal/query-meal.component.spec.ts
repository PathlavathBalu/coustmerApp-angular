import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryMealComponent } from './query-meal.component';

describe('QueryMealComponent', () => {
  let component: QueryMealComponent;
  let fixture: ComponentFixture<QueryMealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryMealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

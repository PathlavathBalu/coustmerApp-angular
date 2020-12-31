import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseTableComponent } from './choose-table.component';

describe('ChooseTableComponent', () => {
  let component: ChooseTableComponent;
  let fixture: ComponentFixture<ChooseTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

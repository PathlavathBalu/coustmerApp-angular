import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAvalibilityComponent } from './table-avalibility.component';

describe('TableAvalibilityComponent', () => {
  let component: TableAvalibilityComponent;
  let fixture: ComponentFixture<TableAvalibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableAvalibilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAvalibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

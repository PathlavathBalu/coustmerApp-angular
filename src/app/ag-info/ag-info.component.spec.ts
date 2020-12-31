import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgInfoComponent } from './ag-info.component';

describe('AgInfoComponent', () => {
  let component: AgInfoComponent;
  let fixture: ComponentFixture<AgInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

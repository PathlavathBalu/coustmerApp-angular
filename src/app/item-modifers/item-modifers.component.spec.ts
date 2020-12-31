import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemModifersComponent } from './item-modifers.component';

describe('ItemModifersComponent', () => {
  let component: ItemModifersComponent;
  let fixture: ComponentFixture<ItemModifersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemModifersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemModifersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

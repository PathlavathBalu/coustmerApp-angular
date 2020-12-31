import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterAddresComponent } from './footer-addres.component';

describe('FooterAddresComponent', () => {
  let component: FooterAddresComponent;
  let fixture: ComponentFixture<FooterAddresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterAddresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterAddresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOrderInvoicePage } from './user-order-invoice.page';

describe('UserOrderInvoicePage', () => {
  let component: UserOrderInvoicePage;
  let fixture: ComponentFixture<UserOrderInvoicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOrderInvoicePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOrderInvoicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

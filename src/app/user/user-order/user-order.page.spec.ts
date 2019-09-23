import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOrderPage } from './user-order.page';

describe('UserOrderPage', () => {
  let component: UserOrderPage;
  let fixture: ComponentFixture<UserOrderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOrderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOrderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

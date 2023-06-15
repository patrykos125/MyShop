import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDeliveryCheckComponent } from './order-delivery-check.component';

describe('OrderDeliveryCheckComponent', () => {
  let component: OrderDeliveryCheckComponent;
  let fixture: ComponentFixture<OrderDeliveryCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDeliveryCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderDeliveryCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

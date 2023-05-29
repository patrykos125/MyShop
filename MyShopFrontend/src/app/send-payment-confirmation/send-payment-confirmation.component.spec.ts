import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendPaymentConfirmationComponent } from './send-payment-confirmation.component';

describe('SendPaymentConfirmationComponent', () => {
  let component: SendPaymentConfirmationComponent;
  let fixture: ComponentFixture<SendPaymentConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendPaymentConfirmationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendPaymentConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

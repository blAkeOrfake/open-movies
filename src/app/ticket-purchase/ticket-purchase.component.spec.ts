import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketPurchaseComponent } from './ticket-purchase.component';

describe('TicketPurchaseComponent', () => {
  let component: TicketPurchaseComponent;
  let fixture: ComponentFixture<TicketPurchaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketPurchaseComponent]
    });
    fixture = TestBed.createComponent(TicketPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

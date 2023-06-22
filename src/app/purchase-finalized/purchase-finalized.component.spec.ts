import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseFinalizedComponent } from './purchase-finalized.component';

describe('PurchaseFinalizedComponent', () => {
  let component: PurchaseFinalizedComponent;
  let fixture: ComponentFixture<PurchaseFinalizedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchaseFinalizedComponent]
    });
    fixture = TestBed.createComponent(PurchaseFinalizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

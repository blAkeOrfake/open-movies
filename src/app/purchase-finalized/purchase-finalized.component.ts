import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Receipt, ReceiptService } from '../receipt.service';

@Component({
  templateUrl: './purchase-finalized.component.html',
  styleUrls: ['./purchase-finalized.component.scss']
})
export class PurchaseFinalizedComponent implements OnInit {

  receipt: Receipt = null;
  constructor(
    private router: Router,
    private receiptService: ReceiptService
  ) { }

  ngOnInit(): void {
    this.receipt = this.receiptService.getCurrentReceipt();
  }
  goBack(): void {
		this.router.navigate(['/']);
	}
}

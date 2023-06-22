import { Injectable } from '@angular/core';

export class Receipt {
  title: string;
  tickets: number;
  date: Date;
  total: number;
  seats: Array<number>;
}
@Injectable({
  providedIn: 'root'
})
export class ReceiptService {

  private currentReceipt: Receipt = null;

  public getCurrentReceipt(): Receipt {
    return this.currentReceipt;
  }
  public setCurrentReceipt(receipt: Receipt): void {
    this.currentReceipt = receipt;
  }
}

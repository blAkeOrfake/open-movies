import { Component } from '@angular/core';

@Component({
  templateUrl: './ticket-purchase.component.html',
  styleUrls: ['./ticket-purchase.component.scss']
})
export class TicketPurchaseComponent {

  goBack(): void {
		window.history.back();
	}
}

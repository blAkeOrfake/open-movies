import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MovieStorageService } from '../movie-storage.service';
import { Router } from '@angular/router';
import { ReceiptService } from '../receipt.service';

@Component({
	templateUrl: './ticket-purchase.component.html',
	styleUrls: ['./ticket-purchase.component.scss']
})
export class TicketPurchaseComponent implements OnInit {
	readonly ticketPrice = 18.99;

	selectedDate: Date = new Date();
	allSeats = Array(60).fill(0).map((x,i)=>i);
	savedReservedSeats: { date: Date; reserved: Array<number>}[] = []
	selectedSeats = [];

	get reservedSeats(): Array<number> {
		const savedReservedSeats = this.savedReservedSeats.find(x => x.date.toISOString() === this.selectedDate.toISOString());

		if (savedReservedSeats) {
			return savedReservedSeats.reserved;
		} else {
			const reservedCount = this.randomIntFromInterval(1, 12);
			const newReservedSeats = [];

			for (let i = 0; i < reservedCount; i++) {
				const seat = this.randomIntFromInterval(0, 59);
				if (newReservedSeats.indexOf(seat) === -1) {
					newReservedSeats.push(seat);
				}
			}

			this.savedReservedSeats.push({ date: this.selectedDate, reserved: newReservedSeats});
			return newReservedSeats;
		}
	}

	currentMovie = null

	purchaseForm: FormGroup = new FormGroup({
		date: new FormControl(Date.now(), Validators.required),
	})

	constructor(
		private movieStorageService: MovieStorageService,
		private cd: ChangeDetectorRef,
		private router: Router,
		private receiptService: ReceiptService
	) {

	}
	ngOnInit() {
		this.currentMovie = this.movieStorageService.getCurrentMovie();
		this.cd.detectChanges();
		console.log('currentMovie', this.currentMovie);
	}

	isSeatReserved(seatNumber: number): boolean {
		return this.reservedSeats.indexOf(seatNumber) > -1;
	}
	isSeatSelected(seatNumber: number): boolean {
		return this.selectedSeats.indexOf(seatNumber) > -1;
	}

	toggleSeat(seatNumber: number): void {
		if (this.isSeatReserved(seatNumber)) return;

		const index = this.selectedSeats.indexOf(seatNumber);
		if (index > -1) {
			this.selectedSeats.splice(index, 1)
		} else {
			this.selectedSeats.push(seatNumber);
		}
		console.log(this.selectedSeats);
	}

	getTotalPrice(): number {
		return (this.ticketPrice * this.selectedSeats.length) || 0.00;
	}
	goBack(): void {
		window.history.back();
	}

	buyNow(): void {
		this.receiptService.setCurrentReceipt({
			title: this.currentMovie.Title,
			tickets: this.selectedSeats.length,
			date: this.purchaseForm.value.date,
			total: this.getTotalPrice(),
			seats: this.selectedSeats
		})
		this.router.navigate(['purchaseFinalized'], { queryParams: {}})
	}

	private randomIntFromInterval(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min)
	}
}

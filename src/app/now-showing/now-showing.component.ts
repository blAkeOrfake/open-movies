import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-now-showing',
	templateUrl: './now-showing.component.html',
	styleUrls: ['./now-showing.component.scss']
})
export class NowShowingComponent {
	readonly movieNamesIds: {name: string, id: string}[] = [
		{
			name: 'avengers',
			id: 'tt4154796'
		},
		{
			name: 'hmf',
			id: 'tt15771916'
		},
		{
			name: 'topgun',
			id: 'tt1745960'
		},
		{
			name: 'gog',
			id: 'tt6791350'
		},
		{
			name: 'fast',
			id: 'tt5433140'
		}
	];

	constructor(
		private router: Router
	) { }

	goToMovieDetails(): void {
		const elements = document.querySelectorAll("label");

		elements.forEach(el => {
			const computedStyle = window.getComputedStyle(el);

			if (computedStyle.getPropertyValue('transform') === "matrix(1, 0, 0, 1, 0, 0)") {
				const movie = this.movieNamesIds.find(x => x.name === el.getAttribute('name'));

				this.router.navigate(['/details'], { queryParams: { id: movie.id } });
				return;
			}
			console.warn("Could not find movie");
		});
	}
}

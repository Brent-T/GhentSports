import { Component, Input } from '@angular/core';

import { Location } from './../../models/location';

@Component({
	selector: 'sports-map',
	templateUrl: './sports-map.component.html',
	styleUrls: ['./sports-map.component.scss']
})

export class SportsMap {
	// Default center Ghent coordinates.
	centerLat: number = 51.0543;
	centerLng: number = 3.7174;
	defaultZoom: number = 12;

	// Sports to display
	@Input() locations: Location[];

	constructor() { }
}

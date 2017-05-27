import { Component, OnInit, Input } from '@angular/core';

import { Location } from './../../models/location';

@Component({
	selector: 'sports-map',
	templateUrl: './sports-map.component.html',
	styleUrls: ['./sports-map.component.scss']
})

export class SportsMap {
	// Default center Ghent coordinates.
	public centerLat: number = 51.0543;
	public centerLong: number = 3.7174;
	public defaultZoom: number = 14;

	// Sports to display
	@Input() lat: number;
	@Input() long: number;
	@Input() locations: Location[];

	constructor() { }
}

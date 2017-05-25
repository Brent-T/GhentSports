import { Component, OnInit, Input } from '@angular/core';

import { GeolocationService } from './../../services/geolocation.service';

import { Location } from './../../models/location';

@Component({
	selector: 'sports-map',
	templateUrl: './sports-map.component.html',
	styleUrls: ['./sports-map.component.scss'],
	providers: [GeolocationService]
})

export class SportsMap implements OnInit {
	// Default center Ghent coordinates.
	public lat: number = null;
	public long: number = null;
	public centerLat: number = 51.0543;
	public centerLong: number = 3.7174;
	public defaultZoom: number = 12;

	// Sports to display
	@Input() locations: Location[];

	constructor(private geolocationService: GeolocationService) { }

	ngOnInit() {
		this.geolocationService.getCurrentLocation()
			.then((position) => {
				const coords = position.coords;
				this.lat = coords.latitude;
				this.long = coords.longitude;
			})
			.catch((error) => console.log('Geolocation error', error));
	}
}

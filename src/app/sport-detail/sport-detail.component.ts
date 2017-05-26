import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SportsService } from './../../services/sports.service';
import { SportLocationService } from './../../services/sportlocations.service';
import { GeolocationService } from './../../services/geolocation.service';

import { SportCategory } from './../../models/enums';
import { Sport } from './../../models/sport';
import { Location } from './../../models/location';

@Component({
	selector: 'sport-detail',
	templateUrl: './sport-detail.component.html',
	styleUrls: ['./sport-detail.component.scss'],
	providers: [GeolocationService]
})

export class SportDetail implements OnInit {
	public sport: Sport;
	public locations: Location[] = [];
	public lat: number = null;
	public long: number = null;

	constructor(private route: ActivatedRoute, private sportsService: SportsService, private sportLocationsSerivce: SportLocationService, private geolocationService: GeolocationService) { }

	ngOnInit() {
		this.route.params.subscribe(params => {
			const id = +params['id'];
			this.sport = this.sportsService.getSport(id);
			this.getSportLocations();
		});
	}

	getSportLocations() {
		this.sportLocationsSerivce.getLocations(this.sport.cat).then((data: Location[]) => {
			this.locations = data;
		});
	}

	findCurrentLocation() {
		this.geolocationService.getCurrentLocation()
			.then((position) => {
				const coords = position.coords;
				this.lat = coords.latitude;
				this.long = coords.longitude;
			})
			.catch((error) => console.log('Geolocation error', error));
	}
}

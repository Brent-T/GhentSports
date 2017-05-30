import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SportsService } from './../../services/sports.service';
import { SportLocationService } from './../../services/sportlocations.service';
import { GeolocationService } from './../../services/geolocation.service';
import { NearbyLocationsService } from './../../services/nearbylocations.service';
import { UserService } from './../../services/user.service';

import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { ShareModalContext, ShareModal } from './../share-modal/share-modal.component';

import { SportCategory } from './../../models/enums';
import { Sport } from './../../models/sport';
import { Location } from './../../models/location';
import { User } from './../../models/user';

@Component({
	selector: 'sport-detail',
	templateUrl: './sport-detail.component.html',
	styleUrls: ['./sport-detail.component.scss'],
	providers: [GeolocationService, NearbyLocationsService]
})

export class SportDetail implements OnInit {
	public sport: Sport;
	public locations: Location[] = [];
	public lat: number = null;
	public long: number = null;
	public currentUser: User;

	constructor(
		private route: ActivatedRoute, 
		private sportsService: SportsService, 
		private sportLocationsSerivce: SportLocationService, 
		private geolocationService: GeolocationService, 
		private nearbyLocationsService: NearbyLocationsService, 
		private userService: UserService,
		private modal: Modal) { }

	ngOnInit() {
		this.route.params.subscribe(params => {
			const id = +params['id'];
			this.sport = this.sportsService.getSport(id);
			this.getSportLocations();
		});
		this.userService.user.subscribe((user: User) => this.currentUser = user);
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

				this.nearbyLocationsService.filterLocationsOnCurrentLocation(
					{ lat: coords.latitude, long: coords.longitude },
					this.locations
				).then((locations: Location[]) => this.locations = locations);
			})
			.catch((error) => console.log('Geolocation error', error));
	}

	showLocationOnMap(location: Location) {
		this.lat = location.geo.lat;
		this.long = location.geo.long;
	}

	shareActivity(location: Location) {
		return this.modal.open(ShareModal, overlayConfigFactory({ sport: this.sport.name, location: location.name }, BSModalContext));
	}
}

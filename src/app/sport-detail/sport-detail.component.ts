import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SportsService } from './../../services/sports.service';
import { SportLocationService } from './../../services/sportlocations.service';
import { GeolocationService } from './../../services/geolocation.service';
import { ActivityService } from './../../services/activity.service';
import { UserService } from './../../services/user.service';

import { SportCategory } from './../../models/enums';
import { Sport } from './../../models/sport';
import { Location } from './../../models/location';
import { User } from './../../models/user';

@Component({
	selector: 'sport-detail',
	templateUrl: './sport-detail.component.html',
	styleUrls: ['./sport-detail.component.scss'],
	providers: [GeolocationService, ActivityService]
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
		private activitiyService: ActivityService, 
		private userService: UserService) { }

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

				this.filterLocationsOnCurrentLocation(
					{ lat: coords.latitude, long: coords.longitude }
				);
			})
			.catch((error) => console.log('Geolocation error', error));
	}

	filterLocationsOnCurrentLocation(position: any, maxLocations: number = 10) {
		this.locations.forEach((location) => {
			const distance = this.calculateDistanceGPSCoordinates(position, location.geo);
			location.distance = Math.round(distance*100) / 100.0;
		});
		this.locations = this.locations.sort(this.compare).slice(0, maxLocations);
	}

	// Make this a static function of Location
	compare(a: Location, b: Location): number {
		if (a.distance < b.distance)
			return -1;
		if (a.distance > b.distance)
			return 1;
		return 0;
	}

	calculateDistanceGPSCoordinates(point1: any, point2: any) {
		const earthRadiusKm: number = 6371;
		const dLat = this.degreesToRadians(point2.lat - point1.lat);
		const dLon = this.degreesToRadians(point2.long - point1.long);

		const p1LatRadian = this.degreesToRadians(point1.lat);
		const p2LatRadian = this.degreesToRadians(point2.lat);

		const a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(p1LatRadian) * Math.cos(p2LatRadian); 
		const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
		return earthRadiusKm * c;
	}

	degreesToRadians(degrees: number) {
		return degrees * Math.PI / 180;
	}

	showLocationOnMap(location: Location) {
		this.lat = location.geo.lat;
		this.long = location.geo.long;
	}

	shareActivity(location: Location) {
		const activity = {
			name: 'bla',
			description: 'test',
			sport: this.sport.name,
			location: location.name
		}
		this.activitiyService.addActivity(activity);
	}
}

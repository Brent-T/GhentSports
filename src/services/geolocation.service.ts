import { Injectable } from '@angular/core';

import { Location } from './../models/location';

@Injectable()
export class GeolocationService {
	private earthRadiusKm: number = 6371;
	private currentPositionOptions: Object = {
		enableHighAccuracy: true,
		timeout: 5000,
		maximumAge: 0
	};

	getCurrentLocation(): Promise<any> {
		return new Promise((resolve, reject) => {
			navigator.geolocation.getCurrentPosition(
				(pos) => resolve(pos), 
				(err) => reject(err), 
				this.currentPositionOptions
			);
		});
	}

	getClosestLocations(locations: Location[], maxLocations: number = 10): Promise<Location[]> {
		return new Promise((resolve, reject) => {
			this.getCurrentLocation()
				.then((pos) => {
					resolve(locations.slice(0, maxLocations));
				})
				.catch(() => {
					resolve(locations.slice(0, maxLocations));
				});
		});
	}

	degreesToRadians(degrees: number) {
		return degrees * Math.PI / 180;
	}

	distanceInKmBetweenEarthCoordinates(point1: any, point2: any) {
		const dLat = this.degreesToRadians(point2.lat - point1.lat);
		const dLon = this.degreesToRadians(point2.long - point1.long);

		point1.lat = this.degreesToRadians(point1.lat);
		point2.lat = this.degreesToRadians(point2.lat);

		const a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(point1.lat) * Math.cos(point2.lat); 
		const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
		return this.earthRadiusKm * c;
	}
}

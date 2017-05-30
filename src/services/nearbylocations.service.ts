import { Injectable } from '@angular/core';

import { Location } from './../models/location';

@Injectable()
export class NearbyLocationsService {
	filterLocationsOnCurrentLocation(position: any, locations: Location[], maxLocations: number = 10): Promise<Location[]> {
		return new Promise((resolve) => {
			locations.forEach((location) => {
				const distance = this.calculateDistanceGPSCoordinates(position, location.geo);
				location.distance = Math.round(distance*100) / 100.0;
			});
			resolve(locations.sort(Location.compare).slice(0, maxLocations));
		});
	}

	calculateDistanceGPSCoordinates(point1: any, point2: any): number {
		const earthRadiusKm: number = 6371;
		const dLat = this.degreesToRadians(point2.lat - point1.lat);
		const dLon = this.degreesToRadians(point2.long - point1.long);

		const p1LatRadian = this.degreesToRadians(point1.lat);
		const p2LatRadian = this.degreesToRadians(point2.lat);

		const a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(p1LatRadian) * Math.cos(p2LatRadian); 
		const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
		return earthRadiusKm * c;
	}

	degreesToRadians(degrees: number): number {
		return degrees * Math.PI / 180;
	}
}

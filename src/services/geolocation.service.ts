import { Injectable } from '@angular/core';

import { Location } from './../models/location';

@Injectable()
export class GeolocationService {
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
}

import { Injectable } from '@angular/core';

@Injectable()
export class GeolocationService {
	private options: Object = {
		enableHighAccuracy: true,
		timeout: 5000,
		maximumAge: 0
	};

	getCurrentLocation(): Promise<any> {
		return new Promise((resolve, reject) => {
			navigator.geolocation.getCurrentPosition(
				(pos) => resolve(pos), 
				(err) => reject(err), 
				this.options
			);
		});
	}
}

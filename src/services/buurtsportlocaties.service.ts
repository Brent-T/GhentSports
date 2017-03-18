import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Location } from './../models/location';

@Injectable()
export class BuurtsportLocatiesService {
	private apiUrl: string = 'https://datatank.stad.gent/4/cultuursportvrijetijd/buurtsportlocaties.json';

	constructor(private http: Http) {}

	getBuursportLocaties(filter: string): Promise<Location[]> {
		return this.http.get(this.apiUrl)
						.toPromise()
						.then(response => {
							return response.json().features
										   .filter((f: any) => f.properties.Sport === filter)
										   .map((f: any) => this.convertToLocation(f));
						})
						.catch(this.handleError);
	}

	convertToLocation(json: any): Location {
		const id = json.id;	
		const name = json.properties.Naam;	
		const sport = json.properties.Sport;	
		const coordinates = json.geometry.coordinates;
		return new Location(id, name, sport, { lat: coordinates[1], long: coordinates[0] });
	}

	handleError(error: any) {
		console.log('Error occured: ', error);
		return Promise.reject(error.message || error);
	}
}
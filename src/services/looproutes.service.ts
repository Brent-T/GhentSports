import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { SportCategory } from './../models/enums';
import { Location } from './../models/location';

@Injectable()
export class LoopRoutesService {
	private apiUrl: string = 'https://datatank.stad.gent/4/cultuursportvrijetijd/routeyoulooproutes.json';

	constructor(private http: Http) {}

	getLoopRoutes(	): Promise<Location[]> {
		return this.http.get(this.apiUrl)
						.toPromise()
						.then(response => {
							return response.json()
										   .map((lr: any) => this.convertToLocation(lr));
						})
						.catch(this.handleError);
	}

	convertToLocation(json: any): Location {
		const id = json.id;	
		const name = json.name.split('_')[0];	
		const sport = SportCategory.Running;	
		const length = json.length;
		const polyline = json.line_google;
		return new Location(id, name, sport, { length, polyline });
	}

	handleError(error: any) {
		console.log('Error occured: ', error);
		return Promise.reject(error.message || error);
	}
}

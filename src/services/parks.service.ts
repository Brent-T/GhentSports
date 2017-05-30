import { Injectable } from '@angular/core';
import { Http, Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Xml2JsonService } from './xml2json.service';

import { SportCategory } from './../models/enums';
import { Location } from './../models/location';

@Injectable()
export class ParksService {
	private parksUrl: string = 'https://datatank.stad.gent/4/milieuennatuur/parken.xml';

	constructor(private http: Http, private xml2json: Xml2JsonService) {}

	getParks(): Promise<Location[]> {		
		let headers = new Headers({ 'Accept': 'application/xml' });
		return this.http.get(this.parksUrl, { headers: headers })
						.toPromise()
						.then(response => {
							const parks = this.convertResponseToJSON(response.text());
							return parks.map((p: any) => this.convertToLocation(p));
						})
						.catch(this.handleError);
	}

	convertResponseToJSON(response:string) {
		// String -> XML
		const parser = new DOMParser();
		const xml = parser.parseFromString(response, "text/xml");

		// XML -> JSON
		const json = this.xml2json.convert(xml); 

		// Return json properties
		const placemark = json['kml']['Document']['Folder']['Placemark'];
		return placemark.map((data:any) => {
			let park = {};
			data['ExtendedData']['SchemaData']['SimpleData'].forEach((a:any) => park[a['@attributes'].name.toLowerCase()] = a['#text']);
			
			let polygon = data['Polygon'] || data['MultiGeometry']['Polygon'][0];
			let polygon_coords = polygon['outerBoundaryIs']['LinearRing']['coordinates']['#text'];
			let coords_string = polygon_coords.split(',0 ')[0].split(',');
			park['location'] = { lat: +coords_string[1], long: +coords_string[0] };
			return park;
		});		
	}

	convertToLocation(json: any): Location {
		const id = json.id;
		const name = json.objectnaam;
		const sport = SportCategory.Running;
		const location = json.location;
		return new Location(id, name, sport, location);
	}	

	handleError(error: any) {
		console.log('Error occured: ', error);
		return Promise.reject(error.message || error);
	}
}

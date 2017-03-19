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
		const parser = new DOMParser();
		const xml = parser.parseFromString(response, "text/xml");
		const json = this.xml2json.convert(xml); 
		const placemark = json['kml']['Document']['Folder']['Placemark'];
		return placemark.map((data:any) => {
			let park = {};
			data['ExtendedData']['SchemaData']['SimpleData'].forEach((a:any) => park[a['@attributes'].name.toLowerCase()] = a['#text']);
			return park;
		});		
	}

	convertToLocation(json: any): Location {
		const id = json.id;
		const name = json.objectnaam;
		const sport = SportCategory.Running;
		const sector = json.sector;
		const surface = json.oppervlakt;
		return new Location(id, name, sport, { sector, surface });
	}	

	handleError(error: any) {
		console.log('Error occured: ', error);
		return Promise.reject(error.message || error);
	}
}

import { Injectable } from '@angular/core';
import { Http, Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Xml2JsonService } from './xml2json.service';
import { Park } from './../models/park';

@Injectable()
export class ParksService {
	private parksUrl = 'https://datatank.stad.gent/4/milieuennatuur/parken.xml';

	constructor(private http: Http, private xml2json: Xml2JsonService) {}

	getParks(): Promise<Park[]> {		
		let headers = new Headers({ 'Accept': 'application/xml' });

		return this.http.get(this.parksUrl, { headers: headers })
						.toPromise()
						.then(response => {
							const reponse_json = this.convertResponseToJSON(response.text());					
							const placemark = reponse_json['kml']['Document']['Folder']['Placemark'];
							const parks = placemark.map((data:any) => {
								let park = {};
								data['ExtendedData']['SchemaData']['SimpleData'].forEach((a:any) => park[a['@attributes'].name.toLowerCase()] = a['#text']);
								return park;
							});
							return parks.map((p:any) => new Park(p['id'], p['objectnaam'], p['oppervlakt'], p['sector']));
						})
						.catch(this.handleError);
	}	

	handleError(error: any) {
		console.log('Error occured: ', error);
		return Promise.reject(error.message || error);
	}

	convertResponseToJSON(response:string) {
		const parser = new DOMParser();
		const xml = parser.parseFromString(response, "text/xml");
		return this.xml2json.convert(xml);		
	}
}

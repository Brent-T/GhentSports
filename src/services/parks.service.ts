import { Injectable } from '@angular/core';
import { Http, Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Park } from './../models/park';

@Injectable()
export class ParksService {
	private parksUrl = 'https://datatank.stad.gent/4/milieuennatuur/parken.xml';

	constructor(private http: Http) {}

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
		return this.xmlToJson(xml);		
	}

	// Changes XML to JSON
	xmlToJson(xml:Node) {		
		
		// Create the return object
		let obj = {};

		if (xml.nodeType == 1) { // element
			// do attributes
			if (xml.attributes.length > 0) {
			obj["@attributes"] = {};
				for (let j = 0; j < xml.attributes.length; j++) {
					let attribute = xml.attributes.item(j);
					obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
				}
			}
		} else if (xml.nodeType == 3) { // text
			obj = xml.nodeValue;
		}

		// do children
		if (xml.hasChildNodes()) {
			for(let i = 0; i < xml.childNodes.length; i++) {
				let item = xml.childNodes.item(i);
				let nodeName = item.nodeName;
				if (typeof(obj[nodeName]) == "undefined") {
					obj[nodeName] = this.xmlToJson(item);
				} else {
					if (typeof(obj[nodeName].push) == "undefined") {
						let old = obj[nodeName];
						obj[nodeName] = [];
						obj[nodeName].push(old);
					}
					obj[nodeName].push(this.xmlToJson(item));
				}
			}
		}
		return obj;
	}
}

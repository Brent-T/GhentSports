import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BuurtsportLocatiesService {
	private apiUrl: string = 'https://datatank.stad.gent/4/cultuursportvrijetijd/buurtsportlocaties.json';

	constructor(private http: Http) {}

	getBuursportLocaties(filter: string): Promise<Object[]> {
		return this.http.get(this.apiUrl)
						.toPromise()
						.then(response => {
							const features = response.json().features;
							const locations = features;
							console.log('features', features);	

							return null;
						})
						.catch(this.handleError);
	}

	handleError(error: any) {
		console.log('Error occured: ', error);
		return Promise.reject(error.message || error);
	}
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ActivityService {
	private apiUrl: string = 'https://ghentsportbackend.herokuapp.com/';

	constructor(private http: Http) { }

	getActivities(): Promise<any> {
		return this.http.get(this.apiUrl + 'activities')
						.toPromise()
						.then(response => {
							return response.json();
						})
						.catch(this.handleError);
	}

	addActivity(activity: any): void {

	}

	handleError(error: any) {
		console.log('Error occured: ', error);
		return Promise.reject(error.message || error);
	}
}

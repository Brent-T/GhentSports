import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { UserService } from './user.service';

@Injectable()
export class ActivityService {
	private apiUrl: string = 'https://ghentsportbackend.herokuapp.com/';

	constructor(private http: Http, private userService: UserService) { }

	getActivities(): Promise<any> {
		return this.http.get(this.apiUrl + 'activities')
						.toPromise()
						.then(response => {
							return response.json();
						})
						.catch(this.handleError);
	}

	addActivity(activity: any): Promise<any> {
		const user = this.userService.getUser();
		activity.user_name = user.name;
		activity.user_picture = user.picture;

		return this.http.post(this.apiUrl + 'activity', activity)
			.toPromise()
			.then((response: any) => {
				return response;
			})
			.catch(this.handleError);
	}

	handleError(error: any) {
		console.log('Error occured: ', error);
		return Promise.reject(error.message || error);
	}
}

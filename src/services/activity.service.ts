import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { UserService } from './user.service';

import { Activity } from './../models/activity';
import { User } from './../models/user';

@Injectable()
export class ActivityService {
	private apiUrl: string = 'https://ghentsportbackend.herokuapp.com/';

	constructor(private http: Http, private userService: UserService) { }

	getActivities(): Promise<Activity[]> {
		return this.http.get(this.apiUrl + 'activities')
						.toPromise()
						.then(response => {
							return response.json()
										   .map((activity: any) => this.convertToActivity(activity));
						})
						.catch(this.handleError);
	}

	convertToActivity(json: any): Activity {
		const name = json.name;	
		const sport = json.sport;	
		const location = json.location;	
		const description = json.description;	
		const userid = json.user.id;	
		const username = json.user.name;	
		const userpicture = json.user.picture;	
		return new Activity(name, sport, location, description, new User(userid, username, userpicture));
	}

	addActivity(activity: Activity): Promise<any> {
		activity.user = this.userService.getUser();
		console.log('test', activity);

		return this.http.post(this.apiUrl + 'activity', activity.toJson())
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

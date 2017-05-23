import { Injectable } from '@angular/core';
import { FacebookService, InitParams, LoginResponse, AuthResponse } from 'ngx-facebook';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { User } from './../models/user';

@Injectable()
export class UserService {
	private user: User;

	constructor(private facebookService: FacebookService) {
		let initParams: InitParams = {
			appId: '245676659169679',
			xfbml: true,
			version: 'v2.9'
		};
		facebookService.init(initParams);
	}
	
	loginWithFacebook(): void {
		this.facebookService.login()
			.then((response: LoginResponse) => {
				const userId = response.authResponse.userID;

				Promise.all([
					this.getUsername(userId),
					this.getProfilePicture(userId),
				]).then((response: any) => {
					console.log(response);
					this.user = new User(response[0].id, response[0].name, response[1].data.url);
					console.log('user', this.user);
				}).catch((error: any) => console.error(error));	
			})
			.catch((error: any) => console.error(error));	
	}

	getUsername(userId: string): Promise<any> {
		return this.facebookService.api(`/${userId}`);
	}

	getProfilePicture(userId: string): Promise<any> {
		return this.facebookService.api(`/${userId}/picture`);
	}

	logoutWithFacebook(): void {
		this.facebookService.logout().then(() => console.log('Logged out!'));
	}

	getUserInfo(): User {
		return this.user;
	}
}

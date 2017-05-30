import { Injectable } from '@angular/core';
import { FacebookService, InitParams, LoginResponse, AuthResponse } from 'ngx-facebook';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { User } from './../models/user';

@Injectable()
export class UserService {
	public user: User = new User();

	constructor(private facebookService: FacebookService) {
		let initParams: InitParams = {
			appId: '245676659169679',
			xfbml: true,
			version: 'v2.9'
		};
		this.facebookService.init(initParams);
	}
	
	loginWithFacebook(): Promise<User> {
		return new Promise((resolve, reject) => {
			this.facebookService.login()
				.then((response: LoginResponse) => {
					const userId = response.authResponse.userID;
					Promise.all([
						this.getUsername(userId),
						this.getProfilePicture(userId),
					]).then((response: any) => {
						this.user = new User(response[0].id, response[0].name, response[1].data.url);
						resolve(this.user);
					}).catch((error: any) => reject(error));	
				})
				.catch((error: any) => reject(error));			
		});
	}

	private getUsername(userId: string): Promise<any> {
		return this.facebookService.api(`/${userId}`);
	}

	private getProfilePicture(userId: string): Promise<any> {
		return this.facebookService.api(`/${userId}/picture`);
	}

	logoutWithFacebook(): void {
		this.facebookService.logout().then(() => this.user = new User());
	}

	getUser(): User {
		return this.user;
	}
}

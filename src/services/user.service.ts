import { Injectable } from '@angular/core';
import { FacebookService, InitParams, LoginResponse, AuthResponse } from 'ngx-facebook';

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
				this.user = new User();
				this.user.id = response.authResponse.userID;

				// Get username
				this.facebookService.api(`/${this.user.id}`)
					.then((response: any) => {
						console.log('name response', response);
						this.user.name = response.name;
					});

				// Get profile picture
				this.facebookService.api(`/${this.user.id}/picture`)
					.then((response: any) => {
						console.log('picture response', response);
						this.user.picture = response.data.url;
					});
			})
			.catch((error: any) => console.error(error));	
	}

	logoutWithFacebook(): void {
		this.facebookService.logout().then(() => console.log('Logged out!'));
	}

	getUserInfo(): User {
		return this.user;
	}
}

import { Injectable, OnInit } from '@angular/core';
import { FacebookService, InitParams, LoginResponse, AuthResponse } from 'ngx-facebook';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { User } from './../models/user';

@Injectable()
export class UserService implements OnInit {
	public user: BehaviorSubject<User> = new BehaviorSubject<User>(new User());

	constructor(private facebookService: FacebookService) { }

	ngOnInit() {
		let initParams: InitParams = {
			appId: '245676659169679',
			xfbml: true,
			version: 'v2.9'
		};
		this.facebookService.init(initParams);
	}
	
	loginWithFacebook(): void {
		this.facebookService.login()
			.then((response: LoginResponse) => {
				const userId = response.authResponse.userID;
				Promise.all([
					this.getUsername(userId),
					this.getProfilePicture(userId),
				]).then((response: any) => {
					this.user.next(new User(response[0].id, response[0].name, response[1].data.url));
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
		this.facebookService.logout().then(() => this.user.next(new User()));
	}

	userLoggedIn(): boolean {
		const user = this.user.value;
		return !(user.id === '' || user.name === '' || user.picture === '');
	}
}

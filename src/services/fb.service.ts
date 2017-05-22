import { Injectable } from '@angular/core';
import { FacebookService, InitParams, LoginResponse } from 'ngx-facebook';

@Injectable()
export class FbService {
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
			.then((response: LoginResponse) => console.log(response))
			.catch((error: any) => console.error(error));	
	}

	logoutWithFacebook(): void {
		this.facebookService.logout().then(() => console.log('Logged out!'));
	}
}

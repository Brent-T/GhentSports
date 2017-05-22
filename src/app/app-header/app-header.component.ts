import { Component } from '@angular/core';

import { UserService } from './../../services/user.service';

@Component({
	selector: 'app-header',
	templateUrl: './app-header.component.html',
	styleUrls: ['./app-header.component.scss'],
	providers: [UserService]
})

export class AppHeader {
	constructor(private userService: UserService) { }

	onLoginClick() {
		this.userService.loginWithFacebook();
	}

	onLogoutClick() {
		this.userService.logoutWithFacebook();
	}
}

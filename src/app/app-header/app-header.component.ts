import { Component } from '@angular/core';

import { UserService } from './../../services/user.service';

import { User } from './../../models/user';

@Component({
	selector: 'app-header',
	templateUrl: './app-header.component.html',
	styleUrls: ['./app-header.component.scss'],
	providers: [UserService]
})

export class AppHeader {
	public currentUser: User;
	public userLoggedIn: boolean;

	constructor(private userService: UserService) {
		this.userLoggedIn = false;
		this.userService.user.subscribe((user) => {
			this.currentUser = user;
			this.userLoggedIn = userService.userLoggedIn();
		});
	}

	onLoginClick() {
		this.userService.loginWithFacebook();
	}

	onLogoutClick() {
		this.userService.logoutWithFacebook();
	}
}

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

	constructor(private userService: UserService) {
		this.userService.user.subscribe((user) => {
			console.log('update user', user);
			this.currentUser = user;
		});
	}

	onLoginClick() {
		this.userService.loginWithFacebook();
	}

	onLogoutClick() {
		this.userService.logoutWithFacebook();
	}
}

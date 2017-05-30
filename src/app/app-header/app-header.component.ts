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
	public title: string = "GhentSports";
	public currentUser: User = null;

	constructor(private userService: UserService) { }

	onLoginClick() {
		this.userService.loginWithFacebook()
			.then((user: User) => {				
				this.currentUser = user
			})
			.catch(error => console.log('User login', error));
	}

	onLogoutClick() {
		this.currentUser = null;
		this.userService.logoutWithFacebook();
	}
}

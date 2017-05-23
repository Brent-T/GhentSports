import { Component, OnInit } from '@angular/core';

import { UserService } from './../../services/user.service';

import { User } from './../../models/user';

@Component({
	selector: 'app-header',
	templateUrl: './app-header.component.html',
	styleUrls: ['./app-header.component.scss'],
	providers: [UserService]
})

export class AppHeader implements OnInit {
	public currentUser: User;
	public userLoggedIn: boolean;

	constructor(private userService: UserService) { }

	ngOnInit() {
		this.userService.user.subscribe((user) => {
			this.userLoggedIn = this.userService.userLoggedIn();
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

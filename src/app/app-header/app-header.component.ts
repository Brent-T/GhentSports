import { Component, OnInit } from '@angular/core';

import { UserService } from './../../services/user.service';

import { User } from './../../models/user';

@Component({
	selector: 'app-header',
	templateUrl: './app-header.component.html',
	styleUrls: ['./app-header.component.scss'],
})

export class AppHeader implements OnInit {
	public title: string = "GhentSports";
	public currentUser: User = null;

	constructor(private userService: UserService) { }

	ngOnInit() {
		this.userService.user.subscribe((user: User) => this.currentUser = user);
	}

	onLoginClick() {
		this.userService.loginWithFacebook();
	}

	onLogoutClick() {
		this.userService.logoutWithFacebook();
	}
}

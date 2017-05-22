import { Component } from '@angular/core';

import { FbService } from './../../services/fb.service';

@Component({
	selector: 'app-header',
	templateUrl: './app-header.component.html',
	styleUrls: ['./app-header.component.scss'],
	providers: [FbService]
})

export class AppHeader {
	constructor(private fbService: FbService) { }

	onLoginClick() {
		this.fbService.loginWithFacebook();
	}
}

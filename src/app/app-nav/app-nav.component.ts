import { Component } from '@angular/core';

@Component({
	selector: 'app-nav',
	templateUrl: './app-nav.component.html',
	styleUrls: ['./app-nav.component.scss']
})

export class AppNav { 
	public isClassVisible: boolean = false;
	public activeTab: string = "sports";

	setCurrentTab(tabName: string) {
		this.activeTab = tabName;
	}
}

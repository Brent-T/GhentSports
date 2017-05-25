import { Component, Input } from '@angular/core';

import { Sport } from './../../models/sport';

@Component({
	selector: 'sports-map',
	templateUrl: './sports-map.component.html',
	styleUrls: ['./sports-map.component.scss']
})

export class SportsMap {
	@Input() sports: Sport[];

	constructor() {
		console.log('sports', this.sports);
	}
}

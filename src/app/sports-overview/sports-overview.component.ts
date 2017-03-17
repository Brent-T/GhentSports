import { Component } from '@angular/core';
import { Sport } from '../../models/sport';
import { SportCategory } from '../../models/enums';

@Component({
	selector: 'sports-overview',
	templateUrl: './sports-overview.component.html',
	styleUrls: ['./sports-overview.component.scss']
})

export class SportsOverview {
	sports: Sport[] = [];

	constructor() {
		this.sports = [
			new Sport('Football', require('../../assets/icons/football.png')),
			new Sport('Basketball', require('../../assets/icons/basketball.png')),
			new Sport('Running', require('../../assets/icons/running.png')),
			new Sport('Pingpong', require('../../assets/icons/pingpong.png')),
			new Sport('Football', require('../../assets/icons/football.png')),
			new Sport('Basketball', require('../../assets/icons/basketball.png')),
			new Sport('Running', require('../../assets/icons/running.png')),
			new Sport('Pingpong', require('../../assets/icons/pingpong.png')),
		];
	}
}

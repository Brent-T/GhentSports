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
			new Sport('Football', require('../../assets/icons/football.png'), SportCategory.Football),
			new Sport('Basketball', require('../../assets/icons/basketball.png'), SportCategory.Basketball),
			new Sport('Running', require('../../assets/icons/running.png'), SportCategory.Running),
			new Sport('Pingpong', require('../../assets/icons/pingpong.png'), SportCategory.Pingpong),
			new Sport('Fitness', require('../../assets/icons/fitness.png'), SportCategory.Fitness),
			new Sport('Skateboard', require('../../assets/icons/skateboard.png'), SportCategory.Skateboard),
			new Sport('Volleyball', require('../../assets/icons/volleyball.png'), SportCategory.Volleyball),
		];
	}
}

import { Injectable } from '@angular/core';

import { SportCategory } from './../models/enums';
import { Sport } from './../models/sport';

@Injectable()
export class SportsService {
	private sports: Sport[] = [
		new Sport(1, 'Football', require('./../assets/icons/football.png'), SportCategory.Football),
		new Sport(2, 'Basketball', require('./../assets/icons/basketball.png'), SportCategory.Basketball),
		new Sport(3, 'Running', require('./../assets/icons/running.png'), SportCategory.Running),
		new Sport(4, 'Pingpong', require('./../assets/icons/pingpong.png'), SportCategory.Pingpong),
		new Sport(5, 'Fitness', require('./../assets/icons/fitness.png'), SportCategory.Fitness),
		new Sport(6, 'Skateboard', require('./../assets/icons/skate.png'), SportCategory.Skate),
		new Sport(7, 'Volleyball', require('./../assets/icons/volleyball.png'), SportCategory.Volleyball),
	];;

	constructor() {}

	getSports(): Sport[] {
		return this.sports;
	}

	getSport(id: number): Sport {
		return this.sports.find(s => s.id === id);
	}
}

import { Injectable } from '@angular/core';

import { SportCategory } from './../models/enums';
import { Sport } from './../models/sport';

@Injectable()
export class SportsService {
	private sports: Sport[] = [
		new Sport(1, 'Football', require('./../assets/sport-icons/football.png'), SportCategory.Football),
		new Sport(2, 'Basketball', require('./../assets/sport-icons/basketball.png'), SportCategory.Basketball),
		new Sport(3, 'Running', require('./../assets/sport-icons/running.png'), SportCategory.Running),
		new Sport(4, 'Pingpong', require('./../assets/sport-icons/pingpong.png'), SportCategory.Pingpong),
		new Sport(5, 'Fitness', require('./../assets/sport-icons/fitness.png'), SportCategory.Fitness),
		new Sport(6, 'Skate', require('./../assets/sport-icons/skate.png'), SportCategory.Skate),
		new Sport(7, 'Volleyball', require('./../assets/sport-icons/volleyball.png'), SportCategory.Volleyball),
	];;

	constructor() {}

	getSports(): Sport[] {
		return this.sports;
	}

	getSport(id: number): Sport {
		return this.sports.find(s => s.id === id);
	}
}

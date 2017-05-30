import { Injectable } from '@angular/core';

import { BuurtsportLocatiesService } from './buurtsportlocaties.service';
import { ParksService } from './parks.service';

import { SportCategory } from './../models/enums';
import { Location } from './../models/location';

@Injectable()
export class SportLocationService {
	constructor(private parksService: ParksService, private buurtsportLocatieService: BuurtsportLocatiesService) {}

	getLocations(sport: SportCategory): Promise<Location[]> {
		switch (sport) {
			case SportCategory.Running:
				return this.parksService.getParks();
			case SportCategory.Basketball:
			case SportCategory.Football:
			case SportCategory.Pingpong:
			case SportCategory.Fitness:
			case SportCategory.Skate:
			case SportCategory.Volleyball:
				return this.buurtsportLocatieService.getBuursportLocaties(sport);
		}
	}
}

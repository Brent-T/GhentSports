import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { LoopRoutesService } from './looproutes.service';
import { BuurtsportLocatiesService } from './buurtsportlocaties.service';
import { ParksService } from './parks.service';

import { SportCategory } from './../models/enums';
import { Location } from './../models/location';

@Injectable()
export class SportLocationService {
	constructor(private parksService: ParksService, private buurtsportLocatieService: BuurtsportLocatiesService, private loopRoutesService: LoopRoutesService) {}

	getLocations(sport: SportCategory): Promise<Location[]> {
		switch (sport) {
			case SportCategory.Running:
				return this.loopRoutesService.getLoopRoutes();
			case SportCategory.Basketball:
			case SportCategory.Football:
			case SportCategory.Pingpong:
			case SportCategory.Fitness:
			case SportCategory.Skate:
			case SportCategory.Volleyball:
				return this.buurtsportLocatieService.getBuursportLocaties(sport);
			default:
				return this.parksService.getParks();
		}
	}
}

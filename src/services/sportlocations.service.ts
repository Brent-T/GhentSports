import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { ParksService } from './parks.service';
import { BuurtsportLocatiesService } from './buurtsportlocaties.service';
import { LoopRoutesService } from './looproutes.service';

import { SportCategory } from './../models/enums';
import { Location } from './../models/location';

@Injectable()
export class SportLocationService {
	constructor(private parksService: ParksService, private buursportLocatieService: BuurtsportLocatiesService, private loopRoutesService: LoopRoutesService) {}

	getLocations(sport: SportCategory): Promise<Location[]> {
		switch (sport) {
			case SportCategory.Running:
				return this.loopRoutesService.getLoopRoutes();
			case SportCategory.Basketball:
			case SportCategory.Football:
			// case SportCategory.Pingpong:
				return this.buursportLocatieService.getBuursportLocaties(sport);
			case SportCategory.Pingpong:
				return this.parksService.getParks();
			default:
				return this.parksService.getParks();
		}
	}
}

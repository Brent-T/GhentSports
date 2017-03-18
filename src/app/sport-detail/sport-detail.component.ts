import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SportsService } from './../../services/sports.service';
import { SportLocationService } from './../../services/sportlocations.service';
import { ParksService } from './../../services/parks.service';
import { BuurtsportLocatiesService } from './../../services/buurtsportlocaties.service';
import { LoopRoutesService } from './../../services/looproutes.service';
import { Xml2JsonService } from './../../services/xml2json.service';

import { SportCategory } from './../../models/enums';
import { Sport } from './../../models/sport';
import { Park } from './../../models/park';
import { Location } from './../../models/location';

@Component({
	selector: 'sport-detail',
	templateUrl: './sport-detail.component.html',
	styleUrls: ['./sport-detail.component.scss'],
	providers: [SportsService, SportLocationService, ParksService, BuurtsportLocatiesService, LoopRoutesService, Xml2JsonService]
})

export class SportDetail implements OnInit {
	sport: Sport;
	locations: Location[];

	constructor(private route: ActivatedRoute, private sportsService: SportsService, private sportLocationsSerivce: SportLocationService, private parksService: ParksService, private buursportLocatieService: BuurtsportLocatiesService, private loopRoutesService: LoopRoutesService) {}

	ngOnInit() {
		this.route.params.subscribe(params => {
			const id = +params['id'];
			this.sport = this.sportsService.getSport(id);
			this.getLocations();
		});	
	}

	getLocations() {
		this.sportLocationsSerivce.getLocations(this.sport.cat).then((data: Location[]) => {
			this.locations = data;
			console.log('response', data);
		});
	}
}

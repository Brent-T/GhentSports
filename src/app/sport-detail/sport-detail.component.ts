import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SportsService } from './../../services/sports.service';
import { SportLocationService } from './../../services/sportlocations.service';

import { SportCategory } from './../../models/enums';
import { Sport } from './../../models/sport';
import { Location } from './../../models/location';

@Component({
	selector: 'sport-detail',
	templateUrl: './sport-detail.component.html',
	styleUrls: ['./sport-detail.component.scss'],
})

export class SportDetail implements OnInit {
	public sport: Sport;
	public locations: Location[] = [];

	constructor(private route: ActivatedRoute, private sportsService: SportsService, private sportLocationsSerivce: SportLocationService) {}

	ngOnInit() {
		this.route.params.subscribe(params => {
			const id = +params['id'];
			this.sport = this.sportsService.getSport(id);
			this.getLocations();
		});
	}

	getLocations() {
		this.sportLocationsSerivce.getLocations(this.sport.cat).then((data: Location[]) => {
			// this.locations = data;
		});
	}
}
